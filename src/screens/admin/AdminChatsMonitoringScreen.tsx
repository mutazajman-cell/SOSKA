import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { Card, Muted, ScreenScroll } from '../../components/ui';
import { useApp } from '../../context/AppContext';
import type { RootStackParamList } from '../../navigation/types';
import { colors, fontSizes } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminChatsMonitoring'>;

export default function AdminChatsMonitoringScreen({}: Props) {
  const { chats, messages } = useApp();

  return (
    <ScreenScroll title="Chats monitoring" subtitle="Buyer <-> Supplier chat list.">
      {chats.length ? (
        chats.map((chat) => {
          const count = messages.filter((message) => message.chat_id === chat.chat_id).length;
          return (
            <Card key={chat.chat_id}>
              <Text style={{ fontWeight: '800', color: colors.text }}>{chat.title}</Text>
              <Text style={{ color: colors.textSecondary, fontSize: fontSizes.caption }}>{chat.type}</Text>
              <Text style={{ color: colors.textSecondary, fontSize: fontSizes.caption }}>
                Messages: {count} - Last: {chat.last_message_preview}
              </Text>
            </Card>
          );
        })
      ) : (
        <Card>
          <Muted>No chats yet.</Muted>
        </Card>
      )}
    </ScreenScroll>
  );
}
