import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockSuppliers } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeSupplierList'>;

export default function EmployeeSupplierListScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Supplier list" subtitle="Managed suppliers (managed_by employee/admin).">
      {mockSuppliers.map((s) => (
        <TouchableOpacity key={s.supplier_id} activeOpacity={0.9} onPress={() => navigation.navigate('EmployeeSupplierDetail')}>
          <Card>
            <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{s.supplier_name}</Text>
            <Text style={{ color: '#5C6570' }}>{s.location_area}</Text>
            <Text style={{ color: '#5C6570' }}>Stock managed by: {s.stock_managed_by}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScreenScroll>
  );
}
