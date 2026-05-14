import { GENRES, STATUS_OPTIONS } from '../Interfaces/movie';

export default function FilterBar({ filters, onChange }) {
  function handleChange(key, value) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <div className="flex flex-wrap gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
      {/* Arama */}
      <input
        type="text"
        placeholder="Film veya dizi ara..."
        value={filters.search}
        onChange={(e) => handleChange('search', e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />

      {/* Durum filtresi */}
      <select
        value={filters.status}
        onChange={(e) => handleChange('status', e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        <option value="">Tüm Durumlar</option>
        {STATUS_OPTIONS.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>

      {/* Tür filtresi */}
      <select
        value={filters.genre}
        onChange={(e) => handleChange('genre', e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        <option value="">Tüm Türler</option>
        {GENRES.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      {/* Film / Dizi filtresi */}
      <select
        value={filters.type}
        onChange={(e) => handleChange('type', e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        <option value="">Film & Dizi</option>
        <option value="film">Yalnızca Film</option>
        <option value="dizi">Yalnızca Dizi</option>
      </select>
    </div>
  );
}
