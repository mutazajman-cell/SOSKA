import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  getConfiguration,
  getModel,
  getSupplier,
  mockChats,
  mockOffers,
  mockUsers,
} from '../data/mock';
import type { ChatMessage, ChatThread, Language, Offer, Role } from '../types';

type AppContextValue = {
  language: Language;
  role: Role;
  chats: ChatThread[];
  messages: ChatMessage[];
  setLanguage: (l: Language) => void;
  setRole: (r: Role) => void;
  startBuyerSupplierChat: (offerId: string) => string;
  sendChatMessage: (chatId: string, senderRole: 'buyer' | 'supplier', text: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const buyerUser = mockUsers.find((u) => u.role === 'buyer');
const supplierUser = mockUsers.find((u) => u.role === 'supplier');

function targetLanguageFor(senderRole: 'buyer' | 'supplier'): Language {
  return senderRole === 'buyer' ? supplierUser?.language ?? 'en' : buyerUser?.language ?? 'en';
}

function mockTranslate(text: string, targetLanguage: Language): string {
  return `[${targetLanguage} translation] ${text}`;
}

function buildChatTitle(offer: Offer): string {
  const model = getModel(offer.model_id);
  const config = getConfiguration(offer.configuration_id);
  const supplier = getSupplier(offer.supplier_id);
  const product = model ? `${model.brand} ${model.model_name}` : 'Product';
  const spec = config ? ` - ${config.ram}/${config.ssd}` : '';
  return `${product}${spec} - ${supplier?.supplier_name ?? 'Seller'}`;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [role, setRoleState] = useState<Role>('buyer');
  const [chats, setChats] = useState<ChatThread[]>(() => mockChats.filter((chat) => chat.type === 'product_chat'));
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const setRole = useCallback((r: Role) => {
    setRoleState(r);
  }, []);

  const startBuyerSupplierChat = useCallback(
    (offerId: string) => {
      const existing = chats.find((chat) => chat.offer_id === offerId);
      if (existing) return existing.chat_id;

      const offer = mockOffers.find((item) => item.offer_id === offerId) ?? mockOffers[0];
      const now = new Date().toISOString();
      const chat: ChatThread = {
        chat_id: `chat_${offer.offer_id}`,
        type: 'product_chat',
        offer_id: offer.offer_id,
        buyer_user_id: buyerUser?.user_id ?? 'u_buyer',
        supplier_id: offer.supplier_id,
        title: buildChatTitle(offer),
        last_message_preview: 'Chat opened. Send the first message to the seller.',
        updated_at: now,
      };

      setChats((current) => [chat, ...current]);
      return chat.chat_id;
    },
    [chats],
  );

  const sendChatMessage = useCallback((chatId: string, senderRole: 'buyer' | 'supplier', text: string) => {
    const originalText = text.trim();
    if (!originalText) return;

    const now = new Date().toISOString();
    const message: ChatMessage = {
      message_id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      chat_id: chatId,
      sender_role: senderRole,
      originalText,
      translatedText: mockTranslate(originalText, targetLanguageFor(senderRole)),
      created_at: now,
    };

    setMessages((current) => [...current, message]);
    setChats((current) =>
      current.map((chat) =>
        chat.chat_id === chatId
          ? {
              ...chat,
              last_message_preview: `${senderRole === 'buyer' ? 'Buyer' : 'Supplier'}: ${originalText}`,
              updated_at: now,
            }
          : chat,
      ),
    );
  }, []);

  const value = useMemo(
    () => ({
      language,
      role,
      chats,
      messages,
      setLanguage,
      setRole,
      startBuyerSupplierChat,
      sendChatMessage,
    }),
    [language, role, chats, messages, setLanguage, setRole, startBuyerSupplierChat, sendChatMessage],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
