import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { getConfiguration, mockConfigurations, mockModels } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';
import { colors, fontSizes, radius, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerConfigurationSelect'>;

export default function BuyerConfigurationSelectScreen({ navigation }: Props) {
  const model = mockModels[0];
  const configs = mockConfigurations.filter((c) => c.model_id === model.model_id);

  return (
    <ScreenScroll title="Pick configuration" subtitle={`${model.brand} ${model.model_name}`}>
      {configs.map((c) => {
        const label = `${c.cpu} · ${c.ram} · ${c.ssd}`;
        const chips = [c.screen_size, c.screen_type, `Grade ${c.grade}`];
        return (
          <TouchableOpacity key={c.configuration_id} activeOpacity={0.92} onPress={() => navigation.navigate('BuyerSellerOffers')}>
            <Card>
              <Text style={{ fontSize: fontSizes.subtitle, fontWeight: '900', color: colors.text, letterSpacing: -0.2 }}>{label}</Text>
              <Text style={{ fontSize: fontSizes.caption, color: colors.textMuted, marginTop: 2 }}>GPU · {c.gpu}</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm, marginTop: space.md }}>
                {chips.map((x) => (
                  <View
                    key={x}
                    style={{
                      backgroundColor: colors.chip,
                      paddingVertical: space.xs,
                      paddingHorizontal: space.sm + 2,
                      borderRadius: radius.full,
                      borderWidth: 1,
                      borderColor: colors.borderLight,
                    }}
                  >
                    <Text style={{ fontSize: fontSizes.micro, fontWeight: '800', color: colors.textSecondary }}>{x}</Text>
                  </View>
                ))}
              </View>
              <Text style={{ marginTop: space.md, fontSize: fontSizes.caption, color: colors.textSecondary, lineHeight: 18 }}>
                {getConfiguration(c.configuration_id)?.extra_specs}
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: space.sm }}>
                <Text style={{ fontSize: fontSizes.caption, fontWeight: '900', color: colors.primary }}>See offers ›</Text>
              </View>
            </Card>
          </TouchableOpacity>
        );
      })}
    </ScreenScroll>
  );
}
