import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { DeliveryStatusTimeline } from '../../components/marketplace';
import { Card, PrimaryButton, ScreenScroll } from '../../components/ui';
import { colors, fontSizes, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'CargoStatusUpdate'>;

export default function CargoStatusUpdateScreen({}: Props) {
  return (
    <ScreenScroll title="Delivery status" subtitle="Update lifecycle steps so buyers see accurate progress.">
      <Card>
        <Text style={{ fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted, marginBottom: space.sm }}>
          Current mock position
        </Text>
        <Text style={{ fontSize: fontSizes.subtitle, fontWeight: '900', color: colors.text }}>Requested</Text>
        <Text style={{ fontSize: fontSizes.caption, color: colors.textSecondary, marginTop: space.xs, lineHeight: 18 }}>
          Advance the timeline as pickup and handoff happen in the field.
        </Text>
      </Card>

      <DeliveryStatusTimeline activeIndex={0} />

      <View style={{ gap: space.sm }}>
        <PrimaryButton label="Mark Accepted (mock)" onPress={() => {}} />
        <PrimaryButton label="Mark In transit (mock)" onPress={() => {}} />
      </View>
    </ScreenScroll>
  );
}
