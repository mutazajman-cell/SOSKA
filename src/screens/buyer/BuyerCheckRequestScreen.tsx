import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockChecks } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerCheckRequest'>;

export default function BuyerCheckRequestScreen({}: Props) {
  const chk = mockChecks[0];
  return (
    <ScreenScroll title="Check request" subtitle="Buyer requests inspection; expert is assigned by admin/system.">
      <Card>
        <Text style={{ fontWeight: '800', color: '#1B1F24' }}>Status: {chk.status}</Text>
        <Text style={{ color: '#5C6570' }}>Check ID: {chk.check_id}</Text>
        <Text style={{ color: '#5C6570' }}>Linked deal: {chk.deal_id}</Text>
      </Card>
    </ScreenScroll>
  );
}
