import PropertyCard from "@/components/PropertyCard";
import { properties } from "../../data/properties";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-bold text-center mb-6">
        Available Properties
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            location={property.location}
            price={property.price}
          />
        ))}
      </div>
    </div>
  );
};