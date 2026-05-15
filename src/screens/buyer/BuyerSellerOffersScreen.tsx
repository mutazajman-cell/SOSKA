import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { getSupplier, offersForConfiguration } from '../../data/mock';
import { Card, MapsButton, ScreenScroll } from '../../components/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerSellerOffers'>;

export default function BuyerSellerOffersScreen({ navigation }: Props) {
  const cfgId = 'c_t14_1';
  const offers = offersForConfiguration(cfgId);

  return (
    <ScreenScroll title="Seller offers" subtitle="Offers must belong to a configuration (architecture).">
      {offers.map((o) => {
        const s = getSupplier(o.supplier_id);
        return (
          <TouchableOpacity key={o.offer_id} activeOpacity={0.9} onPress={() => navigation.navigate('BuyerProductCard')}>
            <Card>
              <Text style={{ fontWeight: '800', color: '#1B1F24' }}>{s?.supplier_name ?? 'Supplier'}</Text>
              <Text style={{ fontWeight: '800', fontSize: 20, color: '#2F6FED' }}>
                {o.price} {o.currency}
              </Text>
              <Text style={{ color: '#5C6570' }}>
                Stock: {o.stock_status} · Qty: {o.quantity} · {o.condition_status}
              </Text>
              <MapsButton url={s?.google_maps_link ?? 'https://www.google.com/maps'} />
            </Card>
          </TouchableOpacity>
        );
      })}
    </ScreenScroll>
  );
}
