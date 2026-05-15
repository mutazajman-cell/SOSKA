import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { Card, PrimaryButton, ScreenScroll } from '../../components/ui';
import { colors, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeSupplierRegister'>;

export default function EmployeeSupplierRegisterScreen({}: Props) {
  const [name, setName] = useState('');
  return (
    <ScreenScroll title="Supplier registration" subtitle="Create supplier profile + contacts (mock).">
      <Card>
        <Text style={{ fontWeight: '700', color: '#1B1F24' }}>Supplier name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="New shop name"
          placeholderTextColor={colors.textMuted}
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 10,
            padding: space.md,
            marginTop: space.sm,
            color: colors.text,
          }}
        />
      </Card>
      <PrimaryButton label="Save draft (mock)" onPress={() => {}} />
    </ScreenScroll>
  );
}
