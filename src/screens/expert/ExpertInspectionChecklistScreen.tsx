import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import type { RootStackParamList } from '../../navigation/types';
import { BulletList, Card, ScreenScroll } from '../../components/ui';

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
    <ScreenScroll title="Inspection checklist" subtitle="Structured inspection (mock checklist).">
      <Card>
        <BulletList items={items} />
      </Card>
    </ScreenScroll>
  );
}
