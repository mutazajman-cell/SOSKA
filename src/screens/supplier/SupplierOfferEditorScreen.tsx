import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockConfigurations, mockModels } from '../../data/mock';
import { Card, Muted, PrimaryButton, ScreenScroll } from '../../components/ui';
import { colors, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SupplierOfferEditor'>;

export default function SupplierOfferEditorScreen({}: Props) {
  const model = mockModels[0];
  const cfg = mockConfigurations.find((c) => c.model_id === model.model_id) ?? mockConfigurations[0];
  const [price, setPrice] = useState('3450');

  return (
    <ScreenScroll title="Add / edit offer" subtitle="Pick model library item + configuration (mock fields).">
      <Card>
        <Text style={{ fontWeight: '800', color: '#1B1F24' }}>Model</Text>
        <Text style={{ color: '#5C6570' }}>
          {model.brand} {model.model_name}
        </Text>
        <Text style={{ fontWeight: '800', marginTop: space.md, color: '#1B1F24' }}>Configuration</Text>
        <Text style={{ color: '#5C6570' }}>
          {cfg.cpu} · {cfg.ram} · {cfg.ssd}
        </Text>
        <Text style={{ fontWeight: '800', marginTop: space.md, color: '#1B1F24' }}>Price (AED)</Text>
        <TextInput
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 10,
            padding: space.md,
            marginTop: space.sm,
            backgroundColor: colors.surface,
            color: colors.text,
          }}
        />
      </Card>
      <PrimaryButton label="Save (mock)" onPress={() => {}} />
      <Muted>Sources: supplier_added / supplier_updated / employee_* / admin_* / imported.</Muted>
    </ScreenScroll>
  );
}
