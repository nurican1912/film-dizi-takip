// Tıklanabilir yıldız puanlama bileşeni (1-5)
export default function StarRating({ value, onChange, readOnly = false }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readOnly && onChange && onChange(star)}
          className={`text-2xl leading-none transition-transform ${
            readOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
          } ${star <= value ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
