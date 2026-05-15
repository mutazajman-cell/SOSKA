import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { getSupplier, offersForConfiguration } from '../../data/mock';
import { SellerOfferCard } from '../../components/marketplace';
import { ScreenScroll } from '../../components/ui';
import { space } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyerSellerOffers'>;

export default function BuyerSellerOffersScreen({ navigation }: Props) {
  const cfgId = 'c_t14_1';
  const offers = offersForConfiguration(cfgId);

  return (
    <ScreenScroll title="Seller offers" subtitle="Every offer is tied to a configuration — compare sellers fairly.">
      <View style={{ gap: space.md }}>
        {offers.map((o) => {
          const s = getSupplier(o.supplier_id);
          return (
            <SellerOfferCard
              key={o.offer_id}
              shopName={s?.supplier_name ?? 'Supplier'}
              areaLabel={s?.location_area}
              price={o.price}
              currency={o.currency}
              stockLabel={o.stock_status}
              condition={o.condition_status}
              mapsUrl={s?.google_maps_link ?? 'https://www.google.com/maps'}
              onPress={() => navigation.navigate('BuyerProductCard')}
            />
          );
        })}
      </View>
    </ScreenScroll>
  );
}
