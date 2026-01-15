import { Building, Factory, UtensilsCrossed } from 'lucide-react';

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Clients we have been privileged to serve include
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Client 1 */}
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏢</div>
            <div>
              <h3 className="font-bold text-lg">Apartment/Multi-family</h3>
              <p className="text-sm text-gray-600">5-20 Units, 21+ Units</p>
            </div>
          </div>

          {/* Client 2 */}
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏭</div>
            <div>
              <h3 className="font-bold text-lg">Industrial Buildings</h3>
              <p className="text-sm text-gray-600">Manufacturing, Office-Warehouse...</p>
            </div>
          </div>

          {/* Client 3 */}
          <div className="flex items-start gap-4">
            <div className="text-4xl">🍦</div>
            <div>
              <h3 className="font-bold text-lg">Special Use Properties</h3>
              <p className="text-sm text-gray-600">Ice cream shop, car wash...</p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-3 h-3 bg-gray-400 rounded-full"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
        </div>
      </div>
    </section>
  );
}
