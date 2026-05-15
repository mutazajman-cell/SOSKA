import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockOffers } from '../../data/mock';
import { DashboardTile } from '../../components/marketplace';
import { Card, ScreenScroll } from '../../components/ui';
import { colors, fontSizes, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SupplierDashboard'>;

export default function SupplierDashboardScreen({ navigation }: Props) {
  const count = mockOffers.filter((o) => o.supplier_id === 's1').length;

  return (
    <ScreenScroll title="Supplier workspace" subtitle="Manage listings and respond to buyers (mock).">
      <Card>
        <Text style={{ fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted, textTransform: 'uppercase' }}>
          Active listings
        </Text>
        <Text style={{ fontSize: 36, fontWeight: '900', color: colors.text, marginTop: space.xs, letterSpacing: -1 }}>{count}</Text>
        <Text style={{ fontSize: fontSizes.caption, color: colors.textSecondary, marginTop: space.sm, lineHeight: 18 }}>
          Offers are always linked to a model configuration. Update stock to stay visible in search.
        </Text>
      </Card>

      <Text style={{ fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted, marginTop: space.xs }}>Menu</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.md }}>
        <DashboardTile title="Products" description="Your catalog & offers" onPress={() => navigation.navigate('SupplierProducts')} />
        <DashboardTile title="Add / edit offer" description="Model library + config" onPress={() => navigation.navigate('SupplierOfferEditor')} />
        <DashboardTile title="Requests / chats" description="Buyer conversations" onPress={() => navigation.navigate('SupplierChats')} />
        <DashboardTile title="Stock update" description="Quantities & availability" onPress={() => navigation.navigate('SupplierStock')} />
        <DashboardTile title="Shop profile" description="Contact & locations" onPress={() => navigation.navigate('SupplierProfile')} />
      </View>
    </ScreenScroll>
  );
}
