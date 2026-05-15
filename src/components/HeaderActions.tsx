import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SOSKA_SUPPORT_WHATSAPP, buildWhatsAppUrl } from '../constants/support';
import { useApp } from '../context/AppContext';
import { t } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import { colors, fontSizes, radius, space } from '../theme';

export function HeaderActions() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { language } = useApp();

  const onSupport = () => {
    if (SOSKA_SUPPORT_WHATSAPP === 'TO_BE_DEFINED') {
      Alert.alert('Support', 'WhatsApp number is not configured yet (SOSKA_SUPPORT_WHATSAPP).');
      return;
    }
    void Linking.openURL(buildWhatsAppUrl(SOSKA_SUPPORT_WHATSAPP));
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.pill} onPress={onSupport} hitSlop={6} activeOpacity={0.88}>
        <Text style={styles.pillText}>{t(language, 'support')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.pill, styles.pillEmphasis]}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Gate' }] })}
        hitSlop={6}
        activeOpacity={0.88}
      >
        <Text style={styles.pillEmphasisText}>{t(language, 'switchRole')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: space.sm, alignItems: 'center', marginRight: space.xs },
  pill: {
    paddingVertical: 6,
    paddingHorizontal: space.md,
    borderRadius: radius.full,
    backgroundColor: colors.chip,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  pillText: { color: colors.text, fontWeight: '800', fontSize: fontSizes.micro },
  pillEmphasis: { backgroundColor: colors.primarySoft, borderColor: colors.border },
  pillEmphasisText: { color: colors.primary, fontWeight: '900', fontSize: fontSizes.micro },
});
