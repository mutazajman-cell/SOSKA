import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockOffers } from '../../data/mock';
import { Card, PrimaryButton, ScreenScroll } from '../../components/ui';
import { space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SupplierDashboard'>;

export default function SupplierDashboardScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Supplier dashboard" subtitle="Manage your offers and stock (mock).">
      <Card>
        <Text style={{ fontWeight: '800', color: '#1B1F24' }}>Open requests</Text>
        <Text style={{ color: '#5C6570' }}>You have {mockOffers.filter((o) => o.supplier_id === 's1').length} visible offers.</Text>
      </Card>
      <PrimaryButton label="Products" onPress={() => navigation.navigate('SupplierProducts')} />
      <PrimaryButton label="Add / edit offer" onPress={() => navigation.navigate('SupplierOfferEditor')} />
      <PrimaryButton label="Requests / chats" onPress={() => navigation.navigate('SupplierChats')} />
      <PrimaryButton label="Stock update" onPress={() => navigation.navigate('SupplierStock')} />
      <PrimaryButton label="Profile" onPress={() => navigation.navigate('SupplierProfile')} />
      <View style={{ height: space.sm }} />
      <Text style={{ color: '#5C6570', fontSize: 13 }}>
        Supplier chooses model from library and attaches configuration; WhatsApp can be enabled later.
      </Text>
    </ScreenScroll>
  );
}
