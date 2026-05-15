import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockDeliveries } from '../../data/mock';
import { Card, MapsButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerDeliveryRequest'>;

export default function BuyerDeliveryRequestScreen({}: Props) {
  const d = mockDeliveries[0];
  return (
    <ScreenScroll title="Delivery request" subtitle="Cargo handles pickup/delivery; Google Maps opens externally.">
      <Card>
        <Text style={{ fontWeight: '800', color: '#1B1F24' }}>Status: {d.status}</Text>
        <Text style={{ color: '#5C6570' }}>{d.maps_hint}</Text>
        <MapsButton url="https://www.google.com/maps" />
      </Card>
    </ScreenScroll>
  );
}
