import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockChats } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminChatsMonitoring'>;

export default function AdminChatsMonitoringScreen({}: Props) {
  return (
    <ScreenScroll title="Chats monitoring" subtitle="Moderation visibility across chat types.">
      {mockChats.map((c) => (
        <Card key={c.chat_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{c.title}</Text>
          <Text style={{ color: '#5C6570' }}>{c.type}</Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
