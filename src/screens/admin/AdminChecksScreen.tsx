import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockChecks } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminChecks'>;

export default function AdminChecksScreen({}: Props) {
  return (
    <ScreenScroll title="Checks management" subtitle="Assign expert checker; track statuses.">
      {mockChecks.map((c) => (
        <Card key={c.check_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{c.check_id}</Text>
          <Text style={{ color: '#5C6570' }}>{c.status}</Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
