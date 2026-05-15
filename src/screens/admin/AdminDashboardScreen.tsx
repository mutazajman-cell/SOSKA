import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { PrimaryButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminDashboard'>;

export default function AdminDashboardScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Admin dashboard" subtitle="Control: roles, moderation, assignments, disputes, audit.">
      <Text style={{ color: '#5C6570', marginBottom: 8 }}>Admin is not a replacement for every operational role.</Text>
      <PrimaryButton label="User management" onPress={() => navigation.navigate('AdminUsers')} />
      <PrimaryButton label="Supplier management" onPress={() => navigation.navigate('AdminSuppliers')} />
      <PrimaryButton label="Model library" onPress={() => navigation.navigate('AdminModelLibrary')} />
      <PrimaryButton label="Offers moderation" onPress={() => navigation.navigate('AdminOffersModeration')} />
      <PrimaryButton label="Chats monitoring" onPress={() => navigation.navigate('AdminChatsMonitoring')} />
      <PrimaryButton label="Checks management" onPress={() => navigation.navigate('AdminChecks')} />
      <PrimaryButton label="Delivery management" onPress={() => navigation.navigate('AdminDelivery')} />
      <PrimaryButton label="Disputes / issues" onPress={() => navigation.navigate('AdminDisputes')} />
    </ScreenScroll>
  );
}
