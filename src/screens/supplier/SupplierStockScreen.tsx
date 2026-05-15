import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockOffers } from '../../data/mock';
import { Card, PrimaryButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'SupplierStock'>;

export default function SupplierStockScreen({}: Props) {
  const o = mockOffers[0];
  return (
    <ScreenScroll title="Stock update" subtitle="Stock statuses: Active / Needs update / Out of stock / Hidden / Rejected.">
      <Card>
        <Text style={{ fontWeight: '800', color: '#1B1F24' }}>Offer {o.offer_id}</Text>
        <Text style={{ color: '#5C6570' }}>Current: {o.stock_status}</Text>
        <Text style={{ color: '#5C6570' }}>Quantity: {o.quantity}</Text>
      </Card>
      <PrimaryButton label="Mark needs update (mock)" onPress={() => {}} />
    </ScreenScroll>
  );
}
