import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockDeliveries } from '../../data/mock';
import { PrimaryButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'CargoDashboard'>;

export default function CargoDashboardScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Cargo dashboard" subtitle="Pickup & delivery only — no pricing/stock edits.">
      <Text style={{ color: '#5C6570', marginBottom: 8 }}>Statuses: Requested → … → Delivered / Issue / Cancelled.</Text>
      {mockDeliveries.map((d) => (
        <PrimaryButton key={d.delivery_id} label={`Delivery ${d.delivery_id}`} onPress={() => navigation.navigate('CargoDeliveryDetail')} />
      ))}
      <PrimaryButton label="Cargo chat" onPress={() => navigation.navigate('CargoChat')} />
      <PrimaryButton label="Status update screen" onPress={() => navigation.navigate('CargoStatusUpdate')} />
    </ScreenScroll>
  );
}
