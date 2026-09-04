import React from 'react';

export default function OrderCard({ item }) {
  // Destructure values with fallbacks and support for property name typos
  const user = item?.User || item?.user || 'Guest Customer';
  const address = item?.Adress || item?.address || 'No address provided';
  const amount = item?.Amount ?? item?.amount ?? 0;
  const status = item?.Pissa;
  //const total = item?.total || '$' + (amount * 14.99).toFixed(2);
  const orderId = item?.id || `#ORD-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-4">
      {/* Top Bar: Order ID & Status */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
          {orderId}
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          {status}
        </span>
      </div>

      {/* Main Content */}
      <div className="space-y-3">
        {/* Customer Name */}
        <h3 className="text-base font-bold text-gray-900 leading-snug">
          {user}
        </h3>

        {/* Address and Quantity Details */}
        <div className="space-y-2 text-sm text-gray-600">
          {/* Address */}
          <div className="flex items-start gap-2">
            <svg 
              className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-2">{address}</span>
          </div>

          {/* Item Quantity */}
          <div className="flex items-center gap-2">
            <svg 
              className="w-4 h-4 text-gray-400 shrink-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="font-medium text-gray-700">
              {amount} {amount === 1 ? 'pizza' : 'pizzas'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}