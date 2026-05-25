import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Muted, PrimaryButton, ScreenScroll } from '../../components/ui';
import { useApp } from '../../context/AppContext';
import type { RootStackParamList } from '../../navigation/types';
import { colors, fontSizes, radius, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerChat'>;

function shortTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export default function BuyerChatScreen({ route }: Props) {
  const { chats, messages, sendChatMessage } = useApp();
  const [draft, setDraft] = useState('');
  const activeChat = useMemo(
    () => chats.find((chat) => chat.chat_id === route.params?.chatId) ?? chats[0],
    [chats, route.params?.chatId],
  );
  const chatMessages = messages.filter((message) => message.chat_id === activeChat?.chat_id);

  const onSend = () => {
    if (!activeChat) return;
    sendChatMessage(activeChat.chat_id, 'buyer', draft);
    setDraft('');
  };

  return (
    <ScreenScroll title="Buyer chat" subtitle={activeChat ? activeChat.title : 'Open a product and start a seller chat.'}>
      {activeChat ? (
        <>
          <Card>
            <Text style={styles.meta}>Updated {shortTime(activeChat.updated_at)}</Text>
            <Text style={styles.preview}>{activeChat.last_message_preview}</Text>
          </Card>

          <View style={{ gap: space.md }}>
            {chatMessages.length ? (
              chatMessages.map((message) => (
                <View
                  key={message.message_id}
                  style={[styles.bubble, message.sender_role === 'buyer' ? styles.bubbleMine : styles.bubbleOther]}
                >
                  <Text style={styles.sender}>{message.sender_role === 'buyer' ? 'Buyer' : 'Supplier'}</Text>
                  <Text style={styles.original}>{message.originalText}</Text>
                  <Text style={styles.translation}>{message.translatedText}</Text>
                </View>
              ))
            ) : (
              <Card>
                <Muted>No messages yet. Send the first message to the seller.</Muted>
              </Card>
            )}
          </View>

          <Card>
            <TextInput
              value={draft}
              onChangeText={setDraft}
              placeholder="Write a message"
              placeholderTextColor={colors.textPlaceholder}
              multiline
              style={styles.input}
            />
            <PrimaryButton label="Send to seller" onPress={onSend} />
          </Card>
        </>
      ) : (
        <Card>
          <Muted>No buyer-supplier chats yet.</Muted>
        </Card>
      )}
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  meta: { fontSize: fontSizes.micro, fontWeight: '800', color: colors.textMuted, textTransform: 'uppercase' },
  preview: { fontSize: fontSizes.body, color: colors.textSecondary, lineHeight: 22 },
  bubble: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: space.md,
    gap: space.xs,
  },
  bubbleMine: { backgroundColor: colors.primarySoft, marginLeft: space.xl },
  bubbleOther: { backgroundColor: colors.surface, marginRight: space.xl },
  sender: { fontSize: fontSizes.micro, fontWeight: '900', color: colors.textMuted, textTransform: 'uppercase' },
  original: { fontSize: fontSizes.body, fontWeight: '700', color: colors.text, lineHeight: 22 },
  translation: { fontSize: fontSizes.caption, color: colors.textSecondary, lineHeight: 18 },
  input: {
    minHeight: 84,
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
