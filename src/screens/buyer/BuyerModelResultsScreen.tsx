import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { mockModels } from '../../data/mock';
import { ModelListingCard } from '../../components/marketplace';
import { ScreenScroll } from '../../components/ui';
import { space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerModelResults'>;

export default function BuyerModelResultsScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Model results" subtitle="Clean listing cards from the model library (mock).">
      <View style={{ gap: space.md }}>
        {mockModels.map((m) => (
          <ModelListingCard
            key={m.model_id}
            imageUri={m.hero_photo_url}
            title={`${m.brand} ${m.model_name}`}
            subtitle={m.specs_summary}
            hint={m.short_description}
            onPress={() => navigation.navigate('BuyerConfigurationSelect')}
          />
        ))}
      </View>
    </ScreenScroll>
  );
}
