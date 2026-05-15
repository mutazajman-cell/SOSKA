import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminDisputes'>;

export default function AdminDisputesScreen({}: Props) {
  return (
    <ScreenScroll title="Disputes / issues" subtitle="Resolution workspace (mock).">
      <Card>
        <Text style={{ fontWeight: '800', color: '#1B1F24' }}>ISS-001</Text>
        <Text style={{ color: '#5C6570' }}>Buyer reports mismatch vs offer description.</Text>
      </Card>
      <Card>
        <Text style={{ fontWeight: '800', color: '#1B1F24' }}>ISS-002</Text>
        <Text style={{ color: '#5C6570' }}>Delivery access issue at drop-off.</Text>
      </Card>
    </ScreenScroll>
  );
}
