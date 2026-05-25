import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Card, Muted, PrimaryButton, ScreenScroll } from '../../components/ui';
import { useApp } from '../../context/AppContext';
import type { RootStackParamList } from '../../navigation/types';
import { colors, fontSizes, radius, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SupplierChats'>;

export default function SupplierChatsScreen({}: Props) {
  const { chats, messages, sendChatMessage } = useApp();
  const supplierChats = chats.filter((chat) => chat.type === 'product_chat');
  const [activeChatId, setActiveChatId] = useState<string | undefined>(supplierChats[0]?.chat_id);
  const [draft, setDraft] = useState('');
  const activeChat = useMemo(
    () => supplierChats.find((chat) => chat.chat_id === activeChatId) ?? supplierChats[0],
    [supplierChats, activeChatId],
  );
  const chatMessages = messages.filter((message) => message.chat_id === activeChat?.chat_id);

  const onReply = () => {
    if (!activeChat) return;
    sendChatMessage(activeChat.chat_id, 'supplier', draft);
    setDraft('');
  };

  return (
    <ScreenScroll title="Supplier chats" subtitle="Incoming buyer conversations.">
      {supplierChats.length ? (
        <>
          <View style={{ gap: space.sm }}>
            {supplierChats.map((chat) => (
              <TouchableOpacity key={chat.chat_id} activeOpacity={0.9} onPress={() => setActiveChatId(chat.chat_id)}>
                <Card>
                  <Text style={styles.title}>{chat.title}</Text>
                  <Text style={styles.preview}>{chat.last_message_preview}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </View>

          {activeChat ? (
            <Card>
              <Text style={styles.sectionTitle}>Reply</Text>
              {chatMessages.length ? (
                chatMessages.map((message) => (
                  <View key={message.message_id} style={styles.messageRow}>
                    <Text style={styles.sender}>{message.sender_role === 'buyer' ? 'Buyer' : 'Supplier'}</Text>
                    <Text style={styles.original}>{message.originalText}</Text>
                    <Text style={styles.translation}>{message.translatedText}</Text>
                  </View>
                ))
              ) : (
                <Muted>Buyer opened this chat but has not sent a message yet.</Muted>
              )}
              <TextInput
                value={draft}
                onChangeText={setDraft}
                placeholder="Write supplier reply"
                placeholderTextColor={colors.textPlaceholder}
                multiline
                style={styles.input}
              />
              <PrimaryButton label="Send reply" onPress={onReply} />
            </Card>
          ) : null}
        </>
      ) : (
        <Card>
          <Muted>No incoming buyer chats yet.</Muted>
        </Card>
      )}
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: '800', color: colors.text, fontSize: fontSizes.body },
  preview: { color: colors.textSecondary, fontSize: fontSizes.caption, lineHeight: 18 },
  sectionTitle: { fontSize: fontSizes.caption, fontWeight: '900', color: colors.textMuted, textTransform: 'uppercase' },
  messageRow: {
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
    backgroundColor: colors.surfaceMuted,
    padding: space.md,
    gap: space.xs,
  },
  sender: { fontSize: fontSizes.micro, fontWeight: '900', color: colors.textMuted, textTransform: 'uppercase' },
  original: { fontSize: fontSizes.body, fontWeight: '700', color: colors.text, lineHeight: 22 },
  translation: { fontSize: fontSizes.caption, color: colors.textSecondary, lineHeight: 18 },
  input: {
    minHeight: 76,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: space.md,
    color: colors.text,
    fontSize: fontSizes.body,
    textAlignVertical: 'top',
    backgroundColor: colors.surfaceMuted,
  },
});
