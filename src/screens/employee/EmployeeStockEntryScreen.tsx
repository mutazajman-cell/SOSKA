import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockOffers } from '../../data/mock';
import { Card, PrimaryButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeStockEntry'>;

export default function EmployeeStockEntryScreen({}: Props) {
  const o = mockOffers[1];
  return (
    <ScreenScroll title="Employee stock entry" subtitle="Enter/update stock on behalf of supplier (mock).">
      <Card>
        <Text style={{ fontWeight: '800', color: '#1B1F24' }}>Offer {o.offer_id}</Text>
        <Text style={{ color: '#5C6570' }}>Mark employee_updated / set stock flags.</Text>
      </Card>
      <PrimaryButton label="Apply stock update (mock)" onPress={() => {}} />
    </ScreenScroll>
  );
}
