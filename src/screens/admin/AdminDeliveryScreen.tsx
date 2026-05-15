import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockDeliveries } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminDelivery'>;

export default function AdminDeliveryScreen({}: Props) {
  return (
    <ScreenScroll title="Delivery management" subtitle="Assign cargo; monitor lifecycle.">
      {mockDeliveries.map((d) => (
        <Card key={d.delivery_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{d.delivery_id}</Text>
          <Text style={{ color: '#5C6570' }}>{d.status}</Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
