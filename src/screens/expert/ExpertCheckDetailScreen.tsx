import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockChecks } from '../../data/mock';
import { Card, MapsButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'ExpertCheckDetail'>;

export default function ExpertCheckDetailScreen({}: Props) {
  const c = mockChecks[0];
  return (
    <ScreenScroll title="Check request detail" subtitle="Assigned expert workflow (mock).">
      <Card>
        <Text style={{ fontWeight: '900', color: '#1B1F24' }}>{c.status}</Text>
        <Text style={{ color: '#5C6570' }}>Check: {c.check_id}</Text>
        <Text style={{ color: '#5C6570' }}>Deal: {c.deal_id}</Text>
      </Card>
      <MapsButton url="https://www.google.com/maps" />
    </ScreenScroll>
  );
}
