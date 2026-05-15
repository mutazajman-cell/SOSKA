import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockOffers } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeDataFreshness'>;

export default function EmployeeDataFreshnessScreen({}: Props) {
  return (
    <ScreenScroll title="Data freshness" subtitle="Find stale offers; mark Active / Needs update / Hidden / etc.">
      {mockOffers.map((o) => (
        <Card key={o.offer_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{o.offer_id}</Text>
          <Text style={{ color: '#5C6570' }}>Last updated: {o.last_updated_at}</Text>
          <Text style={{ color: '#5C6570' }}>Stock: {o.stock_status}</Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
