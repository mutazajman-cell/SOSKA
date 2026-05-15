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
import { colors, fontSizes, radius, space } from '../theme';

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
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

export function PrimaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.85}>
      <Text style={styles.btnText}>{label}</Text>
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
      activeOpacity={0.85}
    >
      <Text style={styles.mapsText}>Open route in Google Maps</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: space.lg, paddingBottom: space.xxl, gap: space.md },
  title: { fontSize: fontSizes.title, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: fontSizes.body, color: colors.textMuted, marginTop: space.xs },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: space.lg,
    gap: space.sm,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: space.md,
    paddingHorizontal: space.lg,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '600', fontSize: fontSizes.body },
  muted: { color: colors.textMuted, fontSize: fontSizes.caption, lineHeight: 18 },
  bullet: { color: colors.text, fontSize: fontSizes.body, lineHeight: 22 },
  maps: {
    marginTop: space.sm,
    alignSelf: 'flex-start',
    backgroundColor: colors.primaryMuted,
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderRadius: radius.sm,
  },
  mapsText: { color: colors.primary, fontWeight: '600', fontSize: fontSizes.caption },
});
