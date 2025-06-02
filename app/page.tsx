import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard";

export default function Home() {
  // Sample property data
  const featuredProperties = [
    {
      id: 1,
      price: "$750,000",
      address: "123 Example Street, Sydney",
      beds: 3,
      baths: 2,
      parking: 1,
      type: "Sale" as const
    },
    {
      id: 2,
      price: "$550 per week",
      address: "456 Sample Road, Melbourne",
      beds: 2,
      baths: 1,
      parking: 1,
      type: "Rent" as const
    },
    {
      id: 3,
      price: "$890,000",
      address: "789 Test Avenue, Brisbane",
      beds: 4,
      baths: 3,
      parking: 2,
      type: "Sale" as const
    }
  ];

  return (
    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="px-4 py-3 h-12">
          <SearchBar placeholder="Search for properties" />
        </div>
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
              style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtjvE0i0xnYq5AKPFW6NtUrecVjOucaSOTKmkcfquaK2eV38Bu17jOpTduCCdwWQ6eBaoj2NBqtgtXMnzJpl79gAntPvDXcDA93ZjE2WJIX9PLJXg6WSLt4aS-KjnICcQI1tHIvOHuNsP2-Ldy3aKq24Cw9bKyxihJZcQMQ8PTpsO8shtCU2y9NdnJO0_9ntAu_nPzxlQwlxV7AE8CdSIK92vAzxknO6y10U5zLSRTjm74CNIpLTkJ0RDJeL0ZiT4z0QZggnyBEVs")'}}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1
                  className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                >
                  Find Your Dream Home
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Explore a wide range of properties for sale and rent across Australia.
                </h2>
              </div>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">Start Searching</span>
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Popular Searches</h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf4] pl-4 pr-4">
            <p className="text-[#0d141c] text-sm font-medium leading-normal">Houses for Sale in Sydney</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf4] pl-4 pr-4">
            <p className="text-[#0d141c] text-sm font-medium leading-normal">Apartments for Rent in Melbourne</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf4] pl-4 pr-4">
            <p className="text-[#0d141c] text-sm font-medium leading-normal">Land for Sale in Brisbane</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf4] pl-4 pr-4">
            <p className="text-[#0d141c] text-sm font-medium leading-normal">Commercial Properties</p>
          </div>
        </div>
        
        {/* Featured Properties Section */}
        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {featuredProperties.map((property) => (
            <PropertyCard 
              key={property.id}
              price={property.price}
              address={property.address}
              beds={property.beds}
              baths={property.baths}
              parking={property.parking}
              type={property.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}