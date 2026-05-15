import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockChats } from '../../data/mock';
import { Card, Muted, ScreenScroll } from '../../components/ui';
import { space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerChat'>;

export default function BuyerChatScreen({}: Props) {
  return (
    <ScreenScroll title="Buyer chat" subtitle="Central working area of the deal (mock threads).">
      {mockChats.map((ch) => (
        <Card key={ch.chat_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{ch.title}</Text>
          <Text style={{ color: '#5C6570', fontSize: 13 }}>{ch.type.replace(/_/g, ' ')}</Text>
          <View style={{ height: space.sm }} />
          <Text style={{ color: '#1B1F24' }}>{ch.last_message_preview}</Text>
          <Muted>AI translator: mock translated preview ↔ original in real build.</Muted>
        </Card>
      ))}
    </ScreenScroll>
  );
}
