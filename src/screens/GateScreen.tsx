import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/ui';
import { useApp } from '../context/AppContext';
import { languageLabels, t } from '../i18n';
import type { RootStackParamList } from '../navigation/types';
import type { Language, Role } from '../types';
import { colors, fontSizes, layout, radius, shadows, space } from '../theme';

const roles: Role[] = ['buyer', 'supplier', 'employee', 'admin', 'expert', 'cargo'];

const roleCopy: Record<Role, { title: string; hint: string }> = {
  buyer: { title: 'Buyer', hint: 'Search, compare, chat, check & delivery' },
  supplier: { title: 'Supplier', hint: 'Offers, stock, chats' },
  employee: { title: 'Employee', hint: 'Suppliers, stock, freshness' },
  admin: { title: 'Admin', hint: 'Users, moderation, assignments' },
  expert: { title: 'Expert', hint: 'Inspections only' },
  cargo: { title: 'Cargo', hint: 'Pickup & delivery' },
};

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
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentMax}>
          <View style={styles.hero}>
            <Text style={styles.logo}>{t(language, 'appName')}</Text>
            <Text style={styles.h1}>{t(language, 'gateTitle')}</Text>
            <Text style={styles.sub}>{t(language, 'gateSubtitle')}</Text>
            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgeText}>{t(language, 'mockBanner')}</Text>
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>{t(language, 'language')}</Text>
            <View style={styles.langGrid}>
              {(Object.keys(languageLabels) as Language[]).map((lng) => {
                const on = language === lng;
                return (
                  <TouchableOpacity
                    key={lng}
                    style={[styles.langCell, on && styles.langCellOn]}
                    onPress={() => setLanguage(lng)}
                    activeOpacity={0.9}
                  >
                    <Text style={[styles.langLabel, on && styles.langLabelOn]}>{languageLabels[lng]}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>{t(language, 'role')}</Text>
            <Text style={styles.panelHint}>Prototype role switcher — pick a persona to preview screens.</Text>
            <View style={{ gap: space.sm, marginTop: space.md }}>
              {roles.map((r) => {
                const on = role === r;
                const copy = roleCopy[r];
                return (
                  <TouchableOpacity
                    key={r}
                    style={[styles.roleRow, on && styles.roleRowOn]}
                    onPress={() => setRole(r)}
                    activeOpacity={0.92}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={[styles.roleTitle, on && styles.roleTitleOn]}>{copy.title}</Text>
                      <Text style={styles.roleHint}>{copy.hint}</Text>
                    </View>
                    <View style={[styles.radio, on && styles.radioOn]}>
                      {on ? <View style={styles.radioDot} /> : null}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.notice}>
            <Text style={styles.noticeText}>
              Employee and Expert are separate roles. AI translator only works inside chats.
            </Text>
          </View>
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={styles.footerSafe}>
        <View style={styles.footer}>
          <PrimaryButton label={t(language, 'continue')} onPress={onContinue} />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: {
    paddingHorizontal: space.lg,
    paddingTop: space.sm,
    paddingBottom: space.xxl,
  },
  contentMax: { width: '100%', maxWidth: layout.maxContentWidth, alignSelf: 'center', gap: space.lg },
  hero: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: space.xl,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...shadows.card,
  },
  logo: {
    fontSize: fontSizes.micro,
    fontWeight: '800',
    color: colors.textMuted,
    letterSpacing: 2,
  },
  h1: { marginTop: space.sm, fontSize: fontSizes.hero, fontWeight: '900', color: colors.text, letterSpacing: -0.6 },
  sub: { marginTop: space.sm, fontSize: fontSizes.body, color: colors.textSecondary, lineHeight: 22 },
  heroBadge: {
    alignSelf: 'flex-start',
    marginTop: space.lg,
    backgroundColor: colors.chip,
    paddingVertical: space.xs,
    paddingHorizontal: space.md,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  heroBadgeText: { fontSize: fontSizes.micro, fontWeight: '800', color: colors.textSecondary },
  panel: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: space.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...shadows.card,
  },
  panelTitle: { fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.8 },
  panelHint: { marginTop: space.xs, fontSize: fontSizes.caption, color: colors.textMuted, lineHeight: 18 },
  langGrid: { marginTop: space.md, flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  langCell: {
    flexBasis: '48%',
    flexGrow: 1,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceMuted,
    paddingVertical: space.md,
    paddingHorizontal: space.md,
  },
  langCellOn: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  langLabel: { fontSize: fontSizes.body, fontWeight: '800', color: colors.text, textAlign: 'center' },
  langLabelOn: { color: colors.primary },
  roleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    padding: space.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    backgroundColor: colors.surfaceMuted,
  },
  roleRowOn: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  roleTitle: { fontSize: fontSizes.body, fontWeight: '900', color: colors.text, textTransform: 'capitalize' },
  roleTitleOn: { color: colors.primary },
  roleHint: { marginTop: 2, fontSize: fontSizes.caption, color: colors.textMuted, lineHeight: 18 },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  radioOn: { borderColor: colors.primary },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
  notice: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: space.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  noticeText: { fontSize: fontSizes.caption, color: colors.textSecondary, lineHeight: 20 },
  footerSafe: {
    backgroundColor: colors.bgElevated,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  footer: {
    paddingHorizontal: space.lg,
    paddingTop: space.md,
    paddingBottom: space.md,
    maxWidth: layout.maxContentWidth,
    width: '100%',
    alignSelf: 'center',
  },
});
