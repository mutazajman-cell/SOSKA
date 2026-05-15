import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockDeliveries } from '../../data/mock';
import { Card, MapsButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'CargoDeliveryDetail'>;

export default function CargoDeliveryDetailScreen({}: Props) {
  const d = mockDeliveries[0];
  return (
    <ScreenScroll title="Delivery detail" subtitle="Route opens in Google Maps (external).">
      <Card>
        <Text style={{ fontWeight: '900', color: '#1B1F24' }}>{d.status}</Text>
        <Text style={{ color: '#5C6570' }}>{d.maps_hint}</Text>
      </Card>
      <MapsButton url="https://www.google.com/maps" />
    </ScreenScroll>
  );
}
