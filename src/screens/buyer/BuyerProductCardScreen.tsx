import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { getConfiguration, getModel, getSupplier, mockOffers } from '../../data/mock';
import { Card, MapsButton, PrimaryButton, ScreenScroll } from '../../components/ui';
import { space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerProductCard'>;

export default function BuyerProductCardScreen({ navigation }: Props) {
  const o = mockOffers[0];
  const m = getModel(o.model_id);
  const c = getConfiguration(o.configuration_id);
  const s = getSupplier(o.supplier_id);

  return (
    <ScreenScroll title="Product card" subtitle="Buyer view — no internal notes.">
      {m ? <Image source={{ uri: m.hero_photo_url }} style={{ width: '100%', height: 200, borderRadius: 12 }} /> : null}
      <Card>
        <Text style={{ fontWeight: '900', fontSize: 20, color: '#1B1F24' }}>
          {m?.brand} {m?.model_name}
        </Text>
        <Text style={{ color: '#5C6570', marginTop: space.xs }}>
          {c?.cpu} · {c?.ram} · {c?.ssd} · {c?.screen_size}
        </Text>
        <Text style={{ fontWeight: '800', fontSize: 22, color: '#2F6FED', marginTop: space.sm }}>
          {o.price} {o.currency}
        </Text>
        <Text style={{ color: '#5C6570' }}>{o.condition_status}</Text>
        <Text style={{ color: '#1B1F24', marginTop: space.sm }}>Seller: {s?.supplier_name}</Text>
        <MapsButton url={s?.google_maps_link ?? 'https://www.google.com/maps'} />
      </Card>
      <PrimaryButton label="Open chat (SOSKA)" onPress={() => navigation.navigate('BuyerChat')} />
    </ScreenScroll>
  );
}
