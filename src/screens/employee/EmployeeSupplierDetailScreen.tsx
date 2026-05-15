import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockSuppliers } from '../../data/mock';
import { Card, MapsButton, Muted, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeSupplierDetail'>;

export default function EmployeeSupplierDetailScreen({}: Props) {
  const s = mockSuppliers[0];
  return (
    <ScreenScroll title="Supplier detail" subtitle="Employee view — internal notes allowed.">
      <Card>
        <Text style={{ fontWeight: '900', color: '#1B1F24' }}>{s.supplier_name}</Text>
        <Text style={{ color: '#5C6570' }}>WhatsApp: {s.whatsapp}</Text>
        <Text style={{ color: '#5C6570' }}>Managed by: {s.managed_by}</Text>
        <Muted>Internal: {s.notes_internal || '—'}</Muted>
        <MapsButton url={s.google_maps_link} />
      </Card>
    </ScreenScroll>
  );
}
