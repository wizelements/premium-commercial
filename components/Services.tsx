'use client';

import { Briefcase, Users, Home, Zap, Building, Landmark } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Commercial Real Estate Financing',
    description: 'Commercial real estate owners love our business Real Estate loans for commercial construction, property purchase, refinancing combined with some of the lowest mortgage rates.',
    link: 'Learn More...'
  },
  {
    icon: Users,
    title: 'SBA Loans',
    description: 'The SBA offers numerous loan programs to help entrepreneurs start, manage and grow their businesses. SBA loan is a small business loan that is partly guaranteed by the U.S. government (the Small Business Administration).',
    link: 'Learn More...'
  },
  {
    icon: Home,
    title: 'Fix N Flip Loans',
    description: 'Looking to purchase and rehab an investment property? We are your go-to short-term financing solution provider to fund the purchase and repairs of an investment property. We make the funding as easy as 1 2 3.',
    link: 'Learn More...'
  },
  {
    icon: Zap,
    title: 'Working Capital Loans',
    description: 'With our Working Capital Loans, we\'ve helped thousands of businesses need collateral for amounts requiring collateral for amounts under $725,000 - unlike traditional bank loans.',
    link: 'Learn More...'
  },
  {
    icon: Building,
    title: 'Hard Money Loans',
    description: 'Hard money loans are expensive, designed to be short-term. We can put Loans to bridge the gap in your investing. Typically you can receive up to 75% of the value of your...',
    link: 'Learn More...'
  },
  {
    icon: Landmark,
    title: 'Apartment Loans',
    description: 'Planning to purchase an apartment building, a condominium or any multifamily residential complex? In most cases, we can get a multifamily loan approved for you for 85% of the total value of the...',
    link: 'Learn More...'
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-2">
          Business Financing Solutions{' '}
          <span className="text-gray-500 font-normal">Customized to Your Unique Needs</span>
        </h2>
        
        {/* First Row - 4 Services */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {services.slice(0, 4).map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                <img src={`/service-${idx + 1}.jpg`} alt={service.title} className="w-full h-48 bg-gray-300 rounded mb-4 object-cover" />
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-semibold">
                  {service.link}
                </a>
              </div>
            );
          })}
        </div>

        {/* Second Row - Remaining Services */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {services.slice(4).map((service, idx) => (
            <div key={idx + 4} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
              <img src={`/service-${idx + 5}.jpg`} alt={service.title} className="w-full h-48 bg-gray-300 rounded mb-4 object-cover" />
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-semibold">
                {service.link}
              </a>
            </div>
          ))}
          {/* Bridge Loans */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
            <img src="/service-7.jpg" alt="Bridge Loans" className="w-full h-48 bg-gray-300 rounded mb-4 object-cover" />
            <h3 className="font-bold text-lg mb-3">Bridge Loans</h3>
            <p className="text-sm text-gray-600 mb-4">Short term mortgage financing that is in place between the termination of one loan and the beginning of another loan. Also, a form of interim loan...</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-semibold">Learn More...</a>
          </div>
          {/* Equipment Financing */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
            <img src="/service-8.jpg" alt="Equipment Financing" className="w-full h-48 bg-gray-300 rounded mb-4 object-cover" />
            <h3 className="font-bold text-lg mb-3">Equipment Financing</h3>
            <p className="text-sm text-gray-600 mb-4">Buying equipments becomes urgent as businesses strive to move forward. We understand the difficulty people run into when in need of additional equipment. Purchasing new equipment for your...</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-semibold">Learn More...</a>
          </div>
        </div>
      </div>
    </section>
  );
}
