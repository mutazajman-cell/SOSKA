import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { getConfiguration, getModel, getSupplier, mockOffers } from '../../data/mock';
import { ProductSummaryCard } from '../../components/marketplace';
import { PrimaryButton, ScreenScroll } from '../../components/ui';
import { useApp } from '../../context/AppContext';
import { colors, radius, shadows, space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerProductCard'>;

export default function BuyerProductCardScreen({ navigation }: Props) {
  const { startBuyerSupplierChat } = useApp();
  const o = mockOffers[0];
  const m = getModel(o.model_id);
  const c = getConfiguration(o.configuration_id);
  const s = getSupplier(o.supplier_id);

  const title = m ? `${m.brand} ${m.model_name}` : 'Product';
  const configLine = c
    ? `${c.cpu} · ${c.ram} · ${c.ssd} · ${c.screen_size} · ${c.screen_type}`
    : '';

  return (
    <ScreenScroll title="Product card" subtitle="Listing detail — buyer-safe fields only.">
      {m ? (
        <View style={heroStyles.wrap}>
          <Image source={{ uri: m.hero_photo_url }} style={heroStyles.image} />
        </View>
      ) : null}
      <ProductSummaryCard
        title={title}
        configLine={configLine}
        price={o.price}
        currency={o.currency}
        condition={o.condition_status}
        seller={s?.supplier_name ?? 'Seller'}
        mapsUrl={s?.google_maps_link ?? 'https://www.google.com/maps'}
      />
      <PrimaryButton
        label="Chat with seller"
        onPress={() => {
          const chatId = startBuyerSupplierChat(o.offer_id);
          navigation.navigate('BuyerChat', { chatId });
        }}
      />
    </ScreenScroll>
  );
}

const heroStyles = {
  wrap: {
    borderRadius: radius.xl,
    overflow: 'hidden' as const,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...shadows.card,
  },
  image: { width: '100%' as const, height: 220, backgroundColor: colors.chip },
};
