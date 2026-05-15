import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeeNotes'>;

export default function EmployeeNotesScreen({}: Props) {
  return (
    <ScreenScroll title="Employee notes" subtitle="Internal notes entity (architecture §7).">
      <Card>
        <Text style={{ color: '#1B1F24' }}>
          Example: “Call supplier Friday about Latitude pricing.”
        </Text>
        <Text style={{ color: '#5C6570', marginTop: 8 }}>note_id · entity_type · entity_id · author · created_at</Text>
      </Card>
    </ScreenScroll>
  );
}
