import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import MovieForm from './Components/MovieForm';
import HomePage from './Pages/HomePage';

const STORAGE_KEY = 'film-dizi-listesi';

function loadMovies() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveMovies(movies) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
}

export default function App() {
  const [movies, setMovies] = useState(loadMovies);
  const [formOpen, setFormOpen]     = useState(false);
  const [editTarget, setEditTarget] = useState(null); // null → ekleme modu

  // movies değişince localStorage'a kaydet
  useEffect(() => {
    saveMovies(movies);
  }, [movies]);

  // --- CRUD işlemleri ---

  function handleAdd(formData) {
    const newMovie = {
      ...formData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setMovies((prev) => [newMovie, ...prev]);
    closeForm();
  }

  function handleUpdate(formData) {
    setMovies((prev) =>
      prev.map((m) => (m.id === formData.id ? { ...formData } : m))
    );
    closeForm();
  }

  function handleDelete(id) {
    if (!window.confirm('Bu kaydı silmek istediğinden emin misin?')) return;
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  function openAddForm() {
    setEditTarget(null);
    setFormOpen(true);
  }

  function openEditForm(movie) {
    setEditTarget(movie);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setEditTarget(null);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAddClick={openAddForm} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <HomePage
          movies={movies}
          onEdit={openEditForm}
          onDelete={handleDelete}
        />
      </main>

      {formOpen && (
        <MovieForm
          initialData={editTarget}
          onSave={editTarget ? handleUpdate : handleAdd}
          onCancel={closeForm}
        />
      )}
    </div>
  );
}
