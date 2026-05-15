import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockUsers } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminUsers'>;

export default function AdminUsersScreen({}: Props) {
  return (
    <ScreenScroll title="User management" subtitle="Assign roles; block users (mock list).">
      {mockUsers.map((u) => (
        <Card key={u.user_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{u.name}</Text>
          <Text style={{ color: '#5C6570' }}>
            {u.role} · {u.language} · {u.status}
          </Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
