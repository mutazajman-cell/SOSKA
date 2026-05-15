import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import { languageLabels, t } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import type { Language, Role } from '../types';
import { BulletList, Card, PrimaryButton } from '../components/ui';
import { colors, fontSizes, radius, space } from '../theme';

const roles: Role[] = ['buyer', 'supplier', 'employee', 'admin', 'expert', 'cargo'];

type Props = NativeStackScreenProps<RootStackParamList, 'Gate'>;

const entryByRole: Record<Role, keyof RootStackParamList> = {
  buyer: 'BuyerHomeSearch',
  supplier: 'SupplierDashboard',
  employee: 'EmployeeDashboard',
  admin: 'AdminDashboard',
  expert: 'ExpertDashboard',
  cargo: 'CargoDashboard',
};

export default function GateScreen({ navigation }: Props) {
  const { language, setLanguage, role, setRole } = useApp();

  const onContinue = () => {
    const target = entryByRole[role];
    navigation.reset({ index: 0, routes: [{ name: target }] });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right', 'bottom']}>
      <View style={styles.wrap}>
        <Text style={styles.brand}>{t(language, 'appName')}</Text>
        <Text style={styles.h1}>{t(language, 'gateTitle')}</Text>
        <Text style={styles.sub}>{t(language, 'gateSubtitle')}</Text>

        <Card>
          <Text style={styles.section}>{t(language, 'language')}</Text>
          <View style={styles.rowWrap}>
            {(Object.keys(languageLabels) as Language[]).map((lng) => (
              <TouchableOpacity
                key={lng}
                style={[styles.chip, language === lng && styles.chipOn]}
                onPress={() => setLanguage(lng)}
              >
                <Text style={[styles.chipText, language === lng && styles.chipTextOn]}>
                  {languageLabels[lng]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        <Card>
          <Text style={styles.section}>{t(language, 'role')}</Text>
          <View style={styles.rowWrap}>
            {roles.map((r) => (
              <TouchableOpacity
                key={r}
                style={[styles.chip, role === r && styles.chipOn]}
                onPress={() => setRole(r)}
              >
                <Text style={[styles.chipText, role === r && styles.chipTextOn]}>{r}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <MutedNote />
        </Card>

        <PrimaryButton label={t(language, 'continue')} onPress={onContinue} />

        <BulletList
          items={[
            t(language, 'mockBanner'),
            'Employee is not Expert — separate flows in-app.',
            'No trading terminal UI — marketplace browsing only.',
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

function MutedNote() {
  return (
    <Text style={styles.note}>
      AI translator works only inside chats (mock threads show translated previews).
    </Text>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  wrap: { flex: 1, padding: space.lg, gap: space.lg },
  brand: { fontSize: fontSizes.caption, color: colors.textMuted, fontWeight: '600', letterSpacing: 1 },
  h1: { fontSize: 26, fontWeight: '800', color: colors.text },
  sub: { fontSize: fontSizes.body, color: colors.textMuted },
  section: { fontWeight: '700', color: colors.text, marginBottom: space.sm },
  rowWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderRadius: radius.sm,
  },
  chipOn: { borderColor: colors.primary, backgroundColor: colors.primaryMuted },
  chipText: { color: colors.text, fontWeight: '600', fontSize: fontSizes.caption, textTransform: 'capitalize' },
  chipTextOn: { color: colors.primary },
  note: { marginTop: space.sm, color: colors.textMuted, fontSize: fontSizes.caption, lineHeight: 18 },
});
