import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { PrimaryButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'ExpertDashboard'>;

export default function ExpertDashboardScreen({ navigation }: Props) {
  return (
    <ScreenScroll title="Expert dashboard" subtitle="Inspection requests only — not supplier registration.">
      <Text style={{ color: '#5C6570', marginBottom: 8 }}>
        Expert checks a specific product in a specific deal (architecture).
      </Text>
      <PrimaryButton label="Check request detail" onPress={() => navigation.navigate('ExpertCheckDetail')} />
      <PrimaryButton label="Inspection checklist" onPress={() => navigation.navigate('ExpertInspectionChecklist')} />
      <PrimaryButton label="Upload check result" onPress={() => navigation.navigate('ExpertUploadResult')} />
      <PrimaryButton label="Expert chat" onPress={() => navigation.navigate('ExpertChat')} />
    </ScreenScroll>
  );
}
