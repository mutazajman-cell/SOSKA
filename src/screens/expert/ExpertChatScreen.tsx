import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockChats } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'ExpertChat'>;

export default function ExpertChatScreen({}: Props) {
  const threads = mockChats.filter((c) => c.type === 'check_chat');
  return (
    <ScreenScroll title="Expert chat" subtitle="Coordinate inspection inside SOSKA.">
      {threads.map((c) => (
        <Card key={c.chat_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{c.title}</Text>
          <Text style={{ color: '#5C6570' }}>{c.last_message_preview}</Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
