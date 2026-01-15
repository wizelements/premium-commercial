import { Building, Settings, DollarSign } from 'lucide-react';

export default function Process() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-16">3 Steps Simplified Process</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <Building size={40} className="text-slate-900" />
            </div>
            <h3 className="font-bold text-lg mb-2">Step One: Apply Online</h3>
            <p className="text-sm text-gray-300">No Obligation, FREE Consultation</p>
          </div>

          {/* Arrow */}
          <div className="text-4xl text-gray-400">→</div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <Settings size={40} className="text-slate-900" />
            </div>
            <h3 className="font-bold text-lg mb-2">Step Two: Quick Processing</h3>
            <p className="text-sm text-gray-300">Every Application is Processed on Priority</p>
          </div>

          {/* Arrow */}
          <div className="text-4xl text-gray-400">→</div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <DollarSign size={40} className="text-slate-900" />
            </div>
            <h3 className="font-bold text-lg mb-2">Step Three: Get Funded</h3>
            <p className="text-sm text-gray-300">Within 72 Hours or Even Less</p>
          </div>
        </div>
      </div>
    </section>
  );
}
