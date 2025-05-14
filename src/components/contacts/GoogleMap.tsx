
import React from 'react';

export interface GoogleMapProps {
  ref?: React.Ref<HTMLDivElement>;
  address?: string;
  zoom?: number;
  height?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = React.forwardRef<HTMLDivElement, GoogleMapProps>(
  ({ address = "Арбатская площадь, Москва", zoom = 15, height = "400px" }, ref) => {
    
    // Создаем URL для Google Maps с нужными параметрами
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347938666669!2d37.59893857725522!3d55.75198287346215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JDRgNCx0LDRgtGB0LrQsNGPINC_0LsuLCDQnNC-0YHQutCy0LA!5e0!3m2!1sru!2sru!4v1715715609010!5m2!1sru!2sru`;

    return (
      <div
        ref={ref}
        className="rounded-lg overflow-hidden shadow-md"
        style={{ height }}
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Карта расположения кофейни Сладкий Момент - ${address}`}
        ></iframe>
      </div>
    );
  }
);

GoogleMap.displayName = 'GoogleMap';
