import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { ExpertChecklistRow } from '../../components/marketplace';
import { Card, ScreenScroll } from '../../components/ui';
import { colors, fontSizes, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ExpertInspectionChecklist'>;

const items = [
  'Chassis cracks / screws',
  'Display uniformity & dead pixels',
  'Keyboard & trackpoint/touchpad',
  'Ports & charging',
  'Battery health sample',
  'BIOS lock / MDM flags',
];

export default function ExpertInspectionChecklistScreen({}: Props) {
  return (
    <ScreenScroll title="Inspection checklist" subtitle="Tap rows to mark items during a physical check (mock UI).">
      <Card>
        <Text style={{ fontSize: fontSizes.caption, fontWeight: '800', color: colors.textMuted, marginBottom: space.md }}>
          Progress is local to this prototype build.
        </Text>
        <View style={{ gap: space.sm }}>
          {items.map((label) => (
            <ExpertChecklistRow key={label} label={label} />
          ))}
        </View>
      </Card>
    </ScreenScroll>
  );
}
