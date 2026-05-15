import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontSizes, layout, radius, shadows, space } from '../theme';

export function ScreenScroll({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView style={styles.safe} edges={['left', 'right', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentMax}>
          <Text style={styles.overline}>SOSKA</Text>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          <View style={styles.divider} />
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export function Card({ children, padded = true }: { children: React.ReactNode; padded?: boolean }) {
  return <View style={[styles.card, !padded && { padding: 0 }]}>{children}</View>;
}

export function PrimaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.88}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
}

export function SecondaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.btnSecondary} onPress={onPress} activeOpacity={0.88}>
      <Text style={styles.btnSecondaryText}>{label}</Text>
    </TouchableOpacity>
  );
}

export function Muted({ children }: { children: React.ReactNode }) {
  return <Text style={styles.muted}>{children}</Text>;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <View style={{ gap: space.sm }}>
      {items.map((x) => (
        <Text key={x} style={styles.bullet}>
          • {x}
        </Text>
      ))}
    </View>
  );
}

export function MapsButton({ url }: { url: string }) {
  return (
    <TouchableOpacity
      style={styles.maps}
      onPress={() => {
        void Linking.openURL(url);
      }}
      activeOpacity={0.88}
    >
      <Text style={styles.mapsText}>Open route in Google Maps</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: {
    paddingHorizontal: space.lg,
    paddingTop: space.md,
    paddingBottom: space.xxxl,
    alignItems: 'stretch',
  },
  contentMax: {
    width: '100%',
    maxWidth: layout.maxContentWidth,
    alignSelf: 'center',
    gap: space.md,
  },
  overline: {
    fontSize: fontSizes.micro,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  title: { fontSize: fontSizes.title, fontWeight: '800', color: colors.text, letterSpacing: -0.3 },
  subtitle: {
    fontSize: fontSizes.body,
    color: colors.textSecondary,
    marginTop: space.xs,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    marginTop: space.sm,
    marginBottom: space.xs,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: space.lg,
    gap: space.sm,
    overflow: 'hidden',
    ...shadows.card,
  },
  btn: {
    backgroundColor: colors.text,
    paddingVertical: space.md + 2,
    paddingHorizontal: space.lg,
    borderRadius: radius.md,
    alignItems: 'center',
    ...shadows.card,
  },
  btnText: { color: '#FFFFFF', fontWeight: '700', fontSize: fontSizes.body, letterSpacing: 0.2 },
  btnSecondary: {
    backgroundColor: colors.surface,
    paddingVertical: space.md + 2,
    paddingHorizontal: space.lg,
    borderRadius: radius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  btnSecondaryText: { color: colors.text, fontWeight: '700', fontSize: fontSizes.body },
  muted: { color: colors.textMuted, fontSize: fontSizes.caption, lineHeight: 18 },
  bullet: { color: colors.textSecondary, fontSize: fontSizes.body, lineHeight: 22 },
  maps: {
    marginTop: space.sm,
    alignSelf: 'flex-start',
    backgroundColor: colors.surfaceMuted,
    paddingVertical: space.sm + 2,
    paddingHorizontal: space.md,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  mapsText: { color: colors.primary, fontWeight: '700', fontSize: fontSizes.caption },
});
