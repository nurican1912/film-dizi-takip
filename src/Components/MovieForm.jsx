import { useState, useEffect } from 'react';
import { GENRES, STATUS_OPTIONS, createEmptyMovie } from '../Interfaces/movie';
import StarRating from './StarRating';

export default function MovieForm({ initialData, onSave, onCancel }) {
  const [form, setForm] = useState(createEmptyMovie());

  // Düzenleme modunda formu doldur
  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  function handleChange(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSave(form);
  }

  const isEdit = Boolean(initialData?.id);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            {isEdit ? 'Kaydı Düzenle' : 'Yeni Ekle'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          {/* Başlık */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Başlık *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Film veya dizi adı"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Film / Dizi */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tür</label>
              <select
                value={form.type}
                onChange={(e) => handleChange('type', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <option value="film">Film</option>
                <option value="dizi">Dizi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Yıl</label>
              <input
                type="number"
                value={form.year}
                onChange={(e) => handleChange('year', Number(e.target.value))}
                min="1900"
                max={new Date().getFullYear() + 2}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
            <select
              value={form.genre}
              onChange={(e) => handleChange('genre', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              {GENRES.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Durum */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Durum</label>
            <select
              value={form.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Puan */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Puan</label>
            <StarRating value={form.rating} onChange={(v) => handleChange('rating', v)} />
          </div>

          {/* Butonlar */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg py-2.5 text-sm font-medium transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg py-2.5 text-sm font-medium transition-colors"
            >
              {isEdit ? 'Güncelle' : 'Ekle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
