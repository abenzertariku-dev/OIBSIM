export default function PizzaCard({ item }) {
  // Support both 'Description' and the typo 'Discription'
  const descriptionText = item?.Description || item?.Discription;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-amber-100 shadow-md shadow-amber-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20 max-w-sm">
      {/* Food Image */}
      <div className="relative h-48 w-full overflow-hidden bg-amber-50">
        <img
          src={item?.Image}
          alt={item?.Name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 rounded-full bg-amber-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-sm">
          {item?.Price} ETB
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {item?.Name}
          </h2>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {descriptionText}
          </p>
        </div>

        {/* Action */}
        <button 
          type="button" 
          className="w-full rounded-xl bg-amber-500 py-2.5 px-4 text-center text-sm font-semibold text-white shadow-md shadow-amber-500/20 transition-all hover:bg-amber-600 active:scale-[0.98]"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}