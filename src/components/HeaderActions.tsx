import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SOSKA_SUPPORT_WHATSAPP, buildWhatsAppUrl } from '../constants/support';
import { useApp } from '../context/AppContext';
import { t } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import { colors, fontSizes, space } from '../theme';

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
      <TouchableOpacity onPress={onSupport} hitSlop={8}>
        <Text style={styles.link}>{t(language, 'support')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Gate' }] })}
        hitSlop={8}
      >
        <Text style={styles.link}>{t(language, 'switchRole')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: space.md, alignItems: 'center', marginRight: space.sm },
  link: { color: colors.primary, fontWeight: '600', fontSize: fontSizes.caption },
});
