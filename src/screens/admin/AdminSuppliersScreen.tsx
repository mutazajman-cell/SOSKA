import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockSuppliers } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminSuppliers'>;

export default function AdminSuppliersScreen({}: Props) {
  return (
    <ScreenScroll title="Supplier management" subtitle="Moderate suppliers and assignments.">
      {mockSuppliers.map((s) => (
        <Card key={s.supplier_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{s.supplier_name}</Text>
          <Text style={{ color: '#5C6570' }}>{s.status}</Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
