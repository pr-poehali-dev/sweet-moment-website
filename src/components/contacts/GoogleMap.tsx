
interface GoogleMapProps {
  address?: string;
  height?: string;
  zoom?: number;
}

/**
 * Компонент для отображения Google Maps
 */
const GoogleMap = ({
  address = 'Москва, улица Кофейная, 42',
  height = '100%',
  zoom = 15
}: GoogleMapProps) => {
  // Создаем URL для Google Maps с заданным адресом и уровнем увеличения
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=${zoom}`;
  
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
      <iframe
        width="100%"
        height={height}
        frameBorder="0"
        style={{ border: 0, height }}
        src={mapUrl}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Локация кофейни 'Сладкий Момент'"
        className="w-full h-full"
      />
    </div>
  );
};

export default GoogleMap;
