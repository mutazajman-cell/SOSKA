import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n';
import { Muted, PrimaryButton, ScreenScroll } from '../../components/ui';
import { colors, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerHomeSearch'>;

export default function BuyerHomeSearchScreen({ navigation }: Props) {
  const { language } = useApp();
  const [q, setQ] = useState('');

  return (
    <ScreenScroll title="Buyer · Home / Search" subtitle="Search models or categories (mock).">
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder={t(language, 'searchPlaceholder')}
        placeholderTextColor={colors.textMuted}
        style={{
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 12,
          padding: space.md,
          backgroundColor: colors.surface,
          fontSize: 16,
          color: colors.text,
        }}
      />
      <PrimaryButton
        label={t(language, 'browseSamples')}
        onPress={() => navigation.navigate('BuyerModelResults')}
      />
      <View style={{ height: space.md }} />
      <PrimaryButton label={t(language, 'deals')} onPress={() => navigation.navigate('BuyerDeals')} />
      <PrimaryButton label={t(language, 'messages')} onPress={() => navigation.navigate('BuyerChat')} />
      <PrimaryButton label={t(language, 'requestCheck')} onPress={() => navigation.navigate('BuyerCheckRequest')} />
      <PrimaryButton
        label={t(language, 'requestDelivery')}
        onPress={() => navigation.navigate('BuyerDeliveryRequest')}
      />
      <Muted>Buyer stays inside SOSKA for deal logic; supplier may use WhatsApp later.</Muted>
    </ScreenScroll>
  );
}
