import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockSuppliers } from '../../data/mock';
import { Card, MapsButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'SupplierProfile'>;

export default function SupplierProfileScreen({}: Props) {
  const s = mockSuppliers[0];
  return (
    <ScreenScroll title="Supplier profile" subtitle="Public-facing shop information (mock).">
      <Card>
        <Text style={{ fontWeight: '900', color: '#1B1F24' }}>{s.supplier_name}</Text>
        <Text style={{ color: '#5C6570' }}>Contact: {s.contact_person}</Text>
        <Text style={{ color: '#5C6570' }}>Phone: {s.phone}</Text>
        <Text style={{ color: '#5C6570' }}>WhatsApp: {s.whatsapp}</Text>
        <Text style={{ color: '#5C6570' }}>Area: {s.location_area}</Text>
        <MapsButton url={s.google_maps_link} />
      </Card>
    </ScreenScroll>
  );
}
