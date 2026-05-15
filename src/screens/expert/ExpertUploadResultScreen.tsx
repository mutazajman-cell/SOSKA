import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { Card, PrimaryButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'ExpertUploadResult'>;

export default function ExpertUploadResultScreen({}: Props) {
  return (
    <ScreenScroll title="Upload check result" subtitle="Result: Approved / Rejected / Issue found (architecture).">
      <Card>
        <Text style={{ color: '#1B1F24' }}>Photos/video upload UI placeholder.</Text>
        <Text style={{ color: '#5C6570', marginTop: 8 }}>Comments to buyer + system statuses.</Text>
      </Card>
      <PrimaryButton label="Submit Approved (mock)" onPress={() => {}} />
      <PrimaryButton label="Submit Issue found (mock)" onPress={() => {}} />
    </ScreenScroll>
  );
}
