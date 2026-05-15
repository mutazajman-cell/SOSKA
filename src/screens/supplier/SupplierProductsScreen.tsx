import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { getConfiguration, getModel, mockOffers } from '../../data/mock';
import { Card, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'SupplierProducts'>;

export default function SupplierProductsScreen({ navigation }: Props) {
  const mine = mockOffers.filter((o) => o.supplier_id === 's1');
  return (
    <ScreenScroll title="Supplier products" subtitle="Your offers linked to model → configuration.">
      {mine.map((o) => {
        const m = getModel(o.model_id);
        const c = getConfiguration(o.configuration_id);
        return (
          <TouchableOpacity key={o.offer_id} activeOpacity={0.9} onPress={() => navigation.navigate('SupplierOfferEditor')}>
            <Card>
              <Text style={{ fontWeight: '800', color: '#1B1F24' }}>
                {m?.brand} {m?.model_name}
              </Text>
              <Text style={{ color: '#5C6570' }}>
                {c?.cpu} · {c?.ram} · {c?.ssd}
              </Text>
              <Text style={{ fontWeight: '800', color: '#2F6FED' }}>
                {o.price} {o.currency} · {o.stock_status}
              </Text>
            </Card>
          </TouchableOpacity>
        );
      })}
    </ScreenScroll>
  );
}
