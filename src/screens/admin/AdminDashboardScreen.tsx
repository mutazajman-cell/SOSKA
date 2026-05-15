import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { DashboardTile } from '../../components/marketplace';
import { Card, ScreenScroll } from '../../components/ui';
import { colors, fontSizes, radius, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminDashboard'>;

export default function AdminDashboardScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Admin control" subtitle="Moderation, assignments, and visibility — lightweight console.">
      <Card>
        <Text style={{ fontSize: fontSizes.body, color: colors.textSecondary, lineHeight: 22 }}>
          Admin coordinates the marketplace. Operational work still lives with Employee, Expert, and Cargo roles.
        </Text>
      </Card>

      <Text style={{ fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted, marginTop: space.xs }}>Sections</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.md }}>
        <DashboardTile title="Users" description="Roles & access" onPress={() => navigation.navigate('AdminUsers')} />
        <DashboardTile title="Suppliers" description="Moderation & assignments" onPress={() => navigation.navigate('AdminSuppliers')} />
        <DashboardTile title="Model library" description="Canonical devices" onPress={() => navigation.navigate('AdminModelLibrary')} />
        <DashboardTile title="Offers" description="Visibility & policy" onPress={() => navigation.navigate('AdminOffersModeration')} />
        <DashboardTile title="Chats" description="Monitoring" onPress={() => navigation.navigate('AdminChatsMonitoring')} />
        <DashboardTile title="Checks" description="Expert pipeline" onPress={() => navigation.navigate('AdminChecks')} />
        <DashboardTile title="Deliveries" description="Cargo pipeline" onPress={() => navigation.navigate('AdminDelivery')} />
        <DashboardTile title="Disputes" description="Issues & mediation" onPress={() => navigation.navigate('AdminDisputes')} />
      </View>
    </ScreenScroll>
  );
}
