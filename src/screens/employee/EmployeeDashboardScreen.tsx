import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { PrimaryButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeDashboard'>;

export default function EmployeeDashboardScreen({ navigation }: Props) {
  return (
    <ScreenScroll
      title="Employee dashboard"
      subtitle="SOSKA staff: suppliers, stock, freshness — not expert inspections."
    >
      <Text style={{ color: '#C62828', fontWeight: '700', marginBottom: 8 }}>
        Employee ≠ Expert (architecture).
      </Text>
      <PrimaryButton label="Supplier registration" onPress={() => navigation.navigate('EmployeeSupplierRegister')} />
      <PrimaryButton label="Supplier list" onPress={() => navigation.navigate('EmployeeSupplierList')} />
      <PrimaryButton label="Supplier detail" onPress={() => navigation.navigate('EmployeeSupplierDetail')} />
      <PrimaryButton label="Stock entry" onPress={() => navigation.navigate('EmployeeStockEntry')} />
      <PrimaryButton label="Data freshness" onPress={() => navigation.navigate('EmployeeDataFreshness')} />
      <PrimaryButton label="Employee notes" onPress={() => navigation.navigate('EmployeeNotes')} />
    </ScreenScroll>
  );
}
