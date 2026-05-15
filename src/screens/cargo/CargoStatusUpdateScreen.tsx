import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { Card, PrimaryButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'CargoStatusUpdate'>;

export default function CargoStatusUpdateScreen({}: Props) {
  return (
    <ScreenScroll title="Delivery status update" subtitle="Cargo updates lifecycle for buyer visibility.">
      <Card>
        <Text style={{ color: '#1B1F24' }}>Current (mock): Requested</Text>
        <Text style={{ color: '#5C6570', marginTop: 8 }}>Next: Assigned → Accepted → Pickup started …</Text>
      </Card>
      <PrimaryButton label="Mark Accepted (mock)" onPress={() => {}} />
      <PrimaryButton label="Mark In transit (mock)" onPress={() => {}} />
    </ScreenScroll>
  );
}
