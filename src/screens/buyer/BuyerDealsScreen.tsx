import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockDeals, mockOffers } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerDeals'>;

export default function BuyerDealsScreen({}: Props) {
  return (
    <ScreenScroll title="Buyer deals / orders" subtitle="Deal statuses follow architecture §19.">
      {mockDeals.map((deal) => {
        const offer = mockOffers.find((o) => o.offer_id === deal.offer_id);
        return (
          <Card key={deal.deal_id}>
            <Text style={{ fontWeight: '900', color: '#1B1F24' }}>{deal.status}</Text>
            <Text style={{ color: '#5C6570' }}>Deal: {deal.deal_id}</Text>
            <Text style={{ color: '#5C6570' }}>Offer: {offer?.offer_id ?? '—'}</Text>
          </Card>
        );
      })}
    </ScreenScroll>
  );
}
