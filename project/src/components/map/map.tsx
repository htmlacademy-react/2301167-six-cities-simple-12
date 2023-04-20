import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { Offers, Offer } from '../../types/offers-type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/app-data/app-data.selectors';

type MapProps = {
  offers: Offers;
  activeOffer: Offer | undefined;
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({
  offers,
  activeOffer,
  className,
}: MapProps): JSX.Element {
  const { city } = useAppSelector(getOffers)[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id === activeOffer?.id ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(map);
      });
      // map.invalidateSize();
    }
  }, [map, offers, activeOffer]);

  return <section className={`${className}__map map`} ref={mapRef} />;
}
