import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockOffers } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminOffersModeration'>;

export default function AdminOffersModerationScreen({}: Props) {
  return (
    <ScreenScroll title="Offers moderation" subtitle="Hide bad offers; enforce visibility rules.">
      {mockOffers.map((o) => (
        <Card key={o.offer_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{o.offer_id}</Text>
          <Text style={{ color: '#5C6570' }}>
            {o.visibility_status} · {o.stock_status} · {o.source}
          </Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
