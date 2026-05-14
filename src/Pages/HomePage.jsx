import { useState, useMemo } from 'react';
import MovieCard from '../Components/MovieCard';
import FilterBar from '../Components/FilterBar';

export default function HomePage({ movies, onEdit, onDelete }) {
  const [filters, setFilters] = useState({ search: '', status: '', genre: '', type: '' });

  const filtered = useMemo(() => {
    return movies.filter((m) => {
      if (filters.search && !m.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.status && m.status !== filters.status) return false;
      if (filters.genre  && m.genre  !== filters.genre)  return false;
      if (filters.type   && m.type   !== filters.type)   return false;
      return true;
    });
  }, [movies, filters]);

  // Özet sayıları
  const counts = {
    total:      movies.length,
    izlendi:    movies.filter((m) => m.status === 'izlendi').length,
    izleniyor:  movies.filter((m) => m.status === 'izleniyor').length,
    izlenecek:  movies.filter((m) => m.status === 'izlenecek').length,
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Özet kartları */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <SummaryCard label="Toplam" value={counts.total} color="bg-indigo-50 text-indigo-700" />
        <SummaryCard label="İzlendi" value={counts.izlendi} color="bg-green-50 text-green-700" />
        <SummaryCard label="İzleniyor" value={counts.izleniyor} color="bg-blue-50 text-blue-700" />
        <SummaryCard label="İzlenecek" value={counts.izlenecek} color="bg-yellow-50 text-yellow-700" />
      </div>

      <FilterBar filters={filters} onChange={setFilters} />

      {/* Sonuç sayısı */}
      <p className="text-sm text-gray-500">
        {filtered.length} kayıt gösteriliyor
        {filtered.length !== movies.length && ` (${movies.length} toplam)`}
      </p>

      {/* Kartlar */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🎬</p>
          <p className="text-lg">Henüz kayıt yok.</p>
          <p className="text-sm mt-1">Sağ üstteki "Ekle" butonunu kullan.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

function SummaryCard({ label, value, color }) {
  return (
    <div className={`rounded-xl px-4 py-3 ${color} flex flex-col`}>
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm font-medium opacity-80">{label}</span>
    </div>
  );
}
