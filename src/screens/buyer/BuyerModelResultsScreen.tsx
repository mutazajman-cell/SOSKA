import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockModels } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';
import { space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerModelResults'>;

export default function BuyerModelResultsScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Model results" subtitle="Avito-style cards (mock library).">
      {mockModels.map((m) => (
        <TouchableOpacity key={m.model_id} activeOpacity={0.9} onPress={() => navigation.navigate('BuyerConfigurationSelect')}>
          <Card>
            <Image source={{ uri: m.hero_photo_url }} style={{ width: '100%', height: 160, borderRadius: 8 }} />
            <Text style={{ fontWeight: '800', fontSize: 17, color: '#1B1F24' }}>
              {m.brand} {m.model_name}
            </Text>
            <Text style={{ color: '#5C6570' }}>{m.specs_summary}</Text>
            <Text style={{ color: '#5C6570', marginTop: space.xs }}>{m.short_description}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScreenScroll>
  );
}
