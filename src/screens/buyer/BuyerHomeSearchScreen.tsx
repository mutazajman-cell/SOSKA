import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n';
import { Muted, PrimaryButton, ScreenScroll } from '../../components/ui';
import { colors, fontSizes, radius, shadows, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerHomeSearch'>;

function QuickLink({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={qlStyles.row} onPress={onPress} activeOpacity={0.88}>
      <Text style={qlStyles.label}>{label}</Text>
      <Text style={qlStyles.chev}>›</Text>
    </TouchableOpacity>
  );
}

const qlStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    paddingVertical: space.md + 2,
    paddingHorizontal: space.lg,
    ...shadows.card,
  },
  label: { fontSize: fontSizes.body, fontWeight: '800', color: colors.text },
  chev: { fontSize: 22, color: colors.textPlaceholder, fontWeight: '300' },
});

export default function BuyerHomeSearchScreen({ navigation }: Props) {
  const { language } = useApp();
  const [q, setQ] = useState('');

  return (
    <ScreenScroll title="Buyer · Home / Search" subtitle="Sharjah laptops & electronics — browse mock listings.">
      <View style={{ gap: space.sm }}>
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder={t(language, 'searchPlaceholder')}
          placeholderTextColor={colors.textPlaceholder}
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: radius.lg,
            paddingVertical: space.md + 4,
            paddingHorizontal: space.lg,
            backgroundColor: colors.surface,
            fontSize: fontSizes.body,
            color: colors.text,
            ...shadows.card,
          }}
        />
        <PrimaryButton label={t(language, 'browseSamples')} onPress={() => navigation.navigate('BuyerModelResults')} />
      </View>

      <Text style={{ fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted, marginTop: space.md }}>
        Shortcuts
      </Text>
      <View style={{ gap: space.sm }}>
        <QuickLink label={t(language, 'deals')} onPress={() => navigation.navigate('BuyerDeals')} />
        <QuickLink label={t(language, 'messages')} onPress={() => navigation.navigate('BuyerChat')} />
        <QuickLink label={t(language, 'requestCheck')} onPress={() => navigation.navigate('BuyerCheckRequest')} />
        <QuickLink label={t(language, 'requestDelivery')} onPress={() => navigation.navigate('BuyerDeliveryRequest')} />
      </View>

      <Muted>Buyer stays inside SOSKA for deal logic; supplier may use WhatsApp later.</Muted>
    </ScreenScroll>
  );
}
