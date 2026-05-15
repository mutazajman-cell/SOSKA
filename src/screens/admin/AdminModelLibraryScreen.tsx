import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockModels } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminModelLibrary'>;

export default function AdminModelLibraryScreen({}: Props) {
  return (
    <ScreenScroll title="Model library management" subtitle="Hero photos: white background, no ads/text/watermarks.">
      {mockModels.map((m) => (
        <Card key={m.model_id}>
          <Text style={{ fontWeight: '800', color: '#1B1F24' }}>
            {m.brand} {m.model_name}
          </Text>
          <Text style={{ color: '#5C6570' }}>{m.status}</Text>
        </Card>
      ))}
    </ScreenScroll>
  );
}
