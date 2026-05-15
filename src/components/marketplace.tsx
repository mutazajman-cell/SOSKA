import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, fontSizes, radius, shadows, space } from '../theme';
import { MapsButton } from './ui';

/** Buyer: model grid card (Avito-style listing) */
export function ModelListingCard({
  imageUri,
  title,
  subtitle,
  hint,
  onPress,
}: {
  imageUri: string;
  title: string;
  subtitle: string;
  hint: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.modelWrap} activeOpacity={0.92} onPress={onPress}>
      <View style={styles.modelCard}>
        <Image source={{ uri: imageUri }} style={styles.modelImage} />
        <View style={styles.modelBody}>
          <Text style={styles.modelTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.modelSubtitle} numberOfLines={1}>
            {subtitle}
          </Text>
          <Text style={styles.modelHint} numberOfLines={2}>
            {hint}
          </Text>
          <View style={styles.modelFooter}>
            <Text style={styles.modelCta}>View configurations</Text>
            <Text style={styles.chevron}>›</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

/** Buyer: seller offer row */
export function SellerOfferCard({
  shopName,
  areaLabel,
  price,
  currency,
  stockLabel,
  condition,
  mapsUrl,
  onPress,
}: {
  shopName: string;
  areaLabel?: string;
  price: number;
  currency: string;
  stockLabel: string;
  condition: string;
  mapsUrl: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.offerWrap} activeOpacity={0.92} onPress={onPress}>
      <View style={styles.offerCard}>
        <View style={styles.offerTop}>
          <View style={{ flex: 1 }}>
            <Text style={styles.offerShop}>{shopName}</Text>
            {areaLabel ? <Text style={styles.offerArea}>{areaLabel}</Text> : null}
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceValue}>
              {price.toLocaleString('en-US')} {currency}
            </Text>
          </View>
        </View>
        <View style={styles.pillRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{stockLabel}</Text>
          </View>
          <View style={[styles.pill, styles.pillMuted]}>
            <Text style={styles.pillTextMuted}>{condition}</Text>
          </View>
        </View>
        <MapsButton url={mapsUrl} />
      </View>
    </TouchableOpacity>
  );
}

/** Buyer: product detail summary */
export function ProductSummaryCard({
  title,
  configLine,
  price,
  currency,
  condition,
  seller,
  mapsUrl,
}: {
  title: string;
  configLine: string;
  price: number;
  currency: string;
  condition: string;
  seller: string;
  mapsUrl: string;
}) {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryTitle}>{title}</Text>
      <Text style={styles.summaryConfig}>{configLine}</Text>
      <View style={styles.summaryDivider} />
      <Text style={styles.summaryPrice}>
        {price.toLocaleString('en-US')} <Text style={styles.summaryCurrency}>{currency}</Text>
      </Text>
      <Text style={styles.summaryCondition}>{condition}</Text>
      <View style={styles.sellerRow}>
        <View style={styles.sellerAvatar}>
          <Text style={styles.sellerAvatarText}>{seller.trim().charAt(0).toUpperCase()}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.sellerLabel}>Seller</Text>
          <Text style={styles.sellerName}>{seller}</Text>
        </View>
      </View>
      <MapsButton url={mapsUrl} />
    </View>
  );
}

/** Chat thread preview */
export function ChatThreadRow({
  title,
  typeLabel,
  preview,
  timeLabel,
}: {
  title: string;
  typeLabel: string;
  preview: string;
  timeLabel: string;
}) {
  return (
    <View style={styles.chatCard}>
      <View style={styles.chatAvatar}>
        <Text style={styles.chatAvatarText}>{title.trim().charAt(0).toUpperCase()}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.chatTopRow}>
          <Text style={styles.chatTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.chatTime}>{timeLabel}</Text>
        </View>
        <Text style={styles.chatType}>{typeLabel}</Text>
        <Text style={styles.chatPreview} numberOfLines={2}>
          {preview}
        </Text>
      </View>
    </View>
  );
}

/** Dashboard grid tile */
export function DashboardTile({
  title,
  description,
  onPress,
}: {
  title: string;
  description: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.tile} activeOpacity={0.9} onPress={onPress}>
      <Text style={styles.tileTitle} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.tileDesc} numberOfLines={2}>
        {description}
      </Text>
      <Text style={styles.tileArrow}>›</Text>
    </TouchableOpacity>
  );
}

/** Expert checklist row (mock toggles, UI only) */
export function ExpertChecklistRow({ label }: { label: string }) {
  const [done, setDone] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.checkRow, done && styles.checkRowDone]}
      activeOpacity={0.9}
      onPress={() => setDone((v) => !v)}
    >
      <View style={[styles.checkbox, done && styles.checkboxOn]}>
        {done ? <Text style={styles.checkMark}>✓</Text> : null}
      </View>
      <Text style={[styles.checkLabel, done && styles.checkLabelDone]}>{label}</Text>
    </TouchableOpacity>
  );
}

const deliverySteps = [
  'Requested',
  'Assigned',
  'Accepted',
  'Pickup started',
  'Picked up',
  'In transit',
  'Delivered',
] as const;

/** Cargo: vertical status timeline */
export function DeliveryStatusTimeline({ activeIndex }: { activeIndex: number }) {
  return (
    <View style={styles.timelineCard}>
      {deliverySteps.map((label, i) => {
        const done = i < activeIndex;
        const current = i === activeIndex;
        const last = i === deliverySteps.length - 1;
        return (
          <View key={label} style={styles.timelineRow}>
            <View style={styles.timelineCol}>
              <View
                style={[
                  styles.timelineDot,
                  done && styles.timelineDotDone,
                  current && styles.timelineDotCurrent,
                ]}
              />
              {!last ? <View style={[styles.timelineLine, done && styles.timelineLineDone]} /> : null}
            </View>
            <View style={styles.timelineLabelCol}>
              <Text style={[styles.timelineText, current && styles.timelineTextCurrent]}>{label}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  modelWrap: { width: '100%' },
  modelCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    overflow: 'hidden',
    ...shadows.card,
  },
  modelImage: { width: '100%', height: 152, backgroundColor: colors.chip },
  modelBody: { padding: space.lg, gap: space.xs },
  modelTitle: { fontSize: fontSizes.subtitle, fontWeight: '800', color: colors.text, letterSpacing: -0.2 },
  modelSubtitle: { fontSize: fontSizes.caption, color: colors.textMuted, fontWeight: '600' },
  modelHint: { fontSize: fontSizes.body, color: colors.textSecondary, lineHeight: 20, marginTop: space.xs },
  modelFooter: {
    marginTop: space.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    paddingTop: space.md,
  },
  modelCta: { fontSize: fontSizes.caption, fontWeight: '800', color: colors.primary },
  chevron: { fontSize: 22, color: colors.textPlaceholder, fontWeight: '300' },

  offerWrap: { width: '100%' },
  offerCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: space.lg,
    gap: space.md,
    ...shadows.card,
  },
  offerTop: { flexDirection: 'row', gap: space.md, alignItems: 'flex-start' },
  offerShop: { fontSize: fontSizes.subtitle, fontWeight: '800', color: colors.text },
  offerArea: { fontSize: fontSizes.caption, color: colors.textMuted, marginTop: 2 },
  priceBox: {
    backgroundColor: colors.accentMuted,
    borderRadius: radius.md,
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  priceValue: { fontSize: fontSizes.subtitle, fontWeight: '900', color: colors.accent },
  pillRow: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  pill: {
    backgroundColor: colors.successMuted,
    paddingVertical: space.xs,
    paddingHorizontal: space.sm + 2,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  pillMuted: { backgroundColor: colors.chip },
  pillText: { fontSize: fontSizes.micro, fontWeight: '800', color: colors.success, textTransform: 'uppercase' },
  pillTextMuted: { fontSize: fontSizes.micro, fontWeight: '700', color: colors.textSecondary },

  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: space.lg,
    gap: space.sm,
    ...shadows.card,
  },
  summaryTitle: { fontSize: fontSizes.title, fontWeight: '900', color: colors.text, letterSpacing: -0.3 },
  summaryConfig: { fontSize: fontSizes.body, color: colors.textSecondary, lineHeight: 22 },
  summaryDivider: { height: 1, backgroundColor: colors.borderLight, marginVertical: space.sm },
  summaryPrice: { fontSize: 28, fontWeight: '900', color: colors.text, letterSpacing: -0.5 },
  summaryCurrency: { fontSize: fontSizes.subtitle, fontWeight: '800', color: colors.textMuted },
  summaryCondition: { fontSize: fontSizes.body, color: colors.textSecondary },
  sellerRow: { flexDirection: 'row', alignItems: 'center', gap: space.md, marginTop: space.sm },
  sellerAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  sellerAvatarText: { fontSize: fontSizes.subtitle, fontWeight: '900', color: colors.primary },
  sellerLabel: { fontSize: fontSizes.micro, color: colors.textMuted, fontWeight: '700', textTransform: 'uppercase' },
  sellerName: { fontSize: fontSizes.body, fontWeight: '700', color: colors.text },

  chatCard: {
    flexDirection: 'row',
    gap: space.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: space.lg,
    ...shadows.card,
  },
  chatAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.chip,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  chatAvatarText: { fontSize: fontSizes.subtitle, fontWeight: '900', color: colors.textSecondary },
  chatTopRow: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  chatTitle: { flex: 1, fontSize: fontSizes.body, fontWeight: '800', color: colors.text },
  chatTime: { fontSize: fontSizes.micro, color: colors.textMuted, fontWeight: '700' },
  chatType: { fontSize: fontSizes.micro, color: colors.textMuted, marginTop: 2, textTransform: 'capitalize' },
  chatPreview: { fontSize: fontSizes.caption, color: colors.textSecondary, marginTop: space.sm, lineHeight: 18 },

  tile: {
    flexBasis: '48%',
    flexGrow: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: space.lg,
    minHeight: 112,
    ...shadows.card,
  },
  tileTitle: { fontSize: fontSizes.body, fontWeight: '800', color: colors.text, paddingRight: space.lg },
  tileDesc: { fontSize: fontSizes.caption, color: colors.textMuted, marginTop: space.xs, lineHeight: 18 },
  tileArrow: {
    position: 'absolute',
    right: space.md,
    bottom: space.md,
    fontSize: 22,
    color: colors.textPlaceholder,
    fontWeight: '300',
  },

  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    paddingVertical: space.md,
    paddingHorizontal: space.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
    backgroundColor: colors.surfaceMuted,
  },
  checkRowDone: { backgroundColor: colors.successMuted, borderColor: colors.borderLight },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: radius.xs,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxOn: { borderColor: colors.success, backgroundColor: colors.surface },
  checkMark: { fontSize: 14, fontWeight: '900', color: colors.success, marginTop: -1 },
  checkLabel: { flex: 1, fontSize: fontSizes.body, color: colors.text, fontWeight: '600', lineHeight: 20 },
  checkLabelDone: { color: colors.textSecondary },

  timelineCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: space.lg,
    ...shadows.card,
  },
  timelineRow: { flexDirection: 'row', minHeight: 36 },
  timelineCol: { width: 22, alignItems: 'center' },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    marginTop: 4,
  },
  timelineDotDone: { backgroundColor: colors.success, borderColor: colors.success },
  timelineDotCurrent: {
    backgroundColor: colors.accentMuted,
    borderColor: colors.accent,
    width: 14,
    height: 14,
    borderRadius: 7,
    marginTop: 3,
  },
  timelineLine: { flex: 1, width: 2, backgroundColor: colors.borderLight, marginVertical: 2 },
  timelineLineDone: { backgroundColor: colors.successMuted },
  timelineLabelCol: { flex: 1, paddingLeft: space.md, paddingBottom: space.md },
  timelineText: { fontSize: fontSizes.caption, color: colors.textMuted, fontWeight: '600' },
  timelineTextCurrent: { color: colors.text, fontWeight: '800', fontSize: fontSizes.body },
});
