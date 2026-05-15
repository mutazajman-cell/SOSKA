import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { DashboardTile } from '../../components/marketplace';
import { ScreenScroll } from '../../components/ui';
import { colors, fontSizes, radius, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeDashboard'>;

export default function EmployeeDashboardScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Employee workspace" subtitle="Suppliers, stock, and data freshness — not inspections.">
      <View
        style={{
          backgroundColor: colors.dangerMuted,
          borderRadius: radius.lg,
          padding: space.lg,
          borderWidth: 1,
          borderColor: colors.borderLight,
        }}
      >
        <Text style={{ fontSize: fontSizes.caption, fontWeight: '900', color: colors.danger, textTransform: 'uppercase' }}>
          Important
        </Text>
        <Text style={{ marginTop: space.sm, fontSize: fontSizes.body, fontWeight: '700', color: colors.text, lineHeight: 22 }}>
          Employee is not Expert. Experts only handle inspection requests.
        </Text>
      </View>

      <Text style={{ fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted, marginTop: space.xs }}>Tasks</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.md }}>
        <DashboardTile title="Register supplier" description="Onboard a new shop" onPress={() => navigation.navigate('EmployeeSupplierRegister')} />
        <DashboardTile title="Supplier list" description="Browse partners" onPress={() => navigation.navigate('EmployeeSupplierList')} />
        <DashboardTile title="Supplier detail" description="Contacts & locations" onPress={() => navigation.navigate('EmployeeSupplierDetail')} />
        <DashboardTile title="Stock entry" description="Update supplier stock" onPress={() => navigation.navigate('EmployeeStockEntry')} />
        <DashboardTile title="Data freshness" description="Stale offers & flags" onPress={() => navigation.navigate('EmployeeDataFreshness')} />
        <DashboardTile title="Internal notes" description="Short operational notes" onPress={() => navigation.navigate('EmployeeNotes')} />
      </View>
    </ScreenScroll>
  );
}
