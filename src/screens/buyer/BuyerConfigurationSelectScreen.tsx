import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { getConfiguration, mockConfigurations, mockModels } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerConfigurationSelect'>;

export default function BuyerConfigurationSelectScreen({ navigation }: Props) {
  const model = mockModels[0];
  const configs = mockConfigurations.filter((c) => c.model_id === model.model_id);

  return (
    <ScreenScroll title="Configuration selection" subtitle={`Model: ${model.brand} ${model.model_name}`}>
      {configs.map((c) => {
        const label = `${c.cpu} · ${c.ram} · ${c.ssd} · ${c.screen_size} · ${c.screen_type}`;
        return (
          <TouchableOpacity key={c.configuration_id} activeOpacity={0.9} onPress={() => navigation.navigate('BuyerSellerOffers')}>
            <Card>
              <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{label}</Text>
              <Text style={{ color: '#5C6570' }}>GPU: {c.gpu} · Grade: {c.grade}</Text>
              <Text style={{ color: '#5C6570' }}>{getConfiguration(c.configuration_id)?.extra_specs}</Text>
            </Card>
          </TouchableOpacity>
        );
      })}
    </ScreenScroll>
  );
}
