import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockChats } from '../../data/mock';
import { ChatThreadRow } from '../../components/marketplace';
import { Card, Muted, ScreenScroll } from '../../components/ui';
import { colors, fontSizes, radius, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerChat'>;

function shortTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export default function BuyerChatScreen({}: Props) {
  return (
    <ScreenScroll title="Chats" subtitle="Deal threads — AI translations appear inline in production.">
      <View style={{ gap: space.md }}>
        {mockChats.map((ch) => (
          <ChatThreadRow
            key={ch.chat_id}
            title={ch.title}
            typeLabel={ch.type.replace(/_/g, ' ')}
            preview={ch.last_message_preview}
            timeLabel={shortTime(ch.updated_at)}
          />
        ))}
      </View>
      <Card>
        <Text style={{ fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted }}>Translator</Text>
        <Muted>Mock only: incoming messages can be shown with an original + translated line per architecture.</Muted>
      </Card>
    </ScreenScroll>
  );
}
