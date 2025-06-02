interface PropertyCardProps {
  price: string;
  address: string;
  beds: number;
  baths: number;
  parking: number;
  type: 'Sale' | 'Rent';
  imageUrl?: string;
}

export default function PropertyCard({ price, address, beds, baths, parking, type, imageUrl }: PropertyCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
      <div 
        className="h-48 bg-gray-200 relative" 
        style={imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className={`absolute top-2 left-2 ${type === 'Sale' ? 'bg-[#0c7ff2]' : 'bg-[#00a86b]'} text-white px-2 py-1 rounded text-xs font-bold`}>
          For {type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{price}</h3>
        <p className="text-sm text-gray-600">{beds} bed · {baths} bath · {parking} parking</p>
        <p className="text-sm font-medium mt-1">{address}</p>
      </div>
    </div>
  );
}