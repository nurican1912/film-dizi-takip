import StarRating from './StarRating';
import { STATUS_COLORS, STATUS_OPTIONS } from '../Interfaces/movie';

export default function MovieCard({ movie, onEdit, onDelete }) {
  const statusLabel = STATUS_OPTIONS.find((s) => s.value === movie.status)?.label;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3">
      {/* Başlık satırı */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg leading-tight">{movie.title}</h3>
          <p className="text-sm text-gray-500">{movie.year} · {movie.genre}</p>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${STATUS_COLORS[movie.status]}`}>
          {statusLabel}
        </span>
      </div>

      {/* Tür rozeti */}
      <span className="inline-block self-start bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
        {movie.type === 'film' ? '🎥 Film' : '📺 Dizi'}
      </span>

      {/* Puan */}
      <StarRating value={movie.rating} readOnly />

      {/* Aksiyon butonları */}
      <div className="flex gap-2 mt-auto pt-2 border-t border-gray-100">
        <button
          onClick={() => onEdit(movie)}
          className="flex-1 text-sm text-indigo-600 hover:bg-indigo-50 border border-indigo-200 rounded-lg py-1.5 transition-colors"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(movie.id)}
          className="flex-1 text-sm text-red-500 hover:bg-red-50 border border-red-200 rounded-lg py-1.5 transition-colors"
        >
          Sil
        </button>
      </div>
    </div>
  );
}
