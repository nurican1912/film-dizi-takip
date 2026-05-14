export default function Navbar({ onAddClick }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎬</span>
        <span className="text-xl font-bold tracking-tight">Film & Dizi Takip</span>
      </div>
      <button
        onClick={onAddClick}
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
      >
        + Ekle
      </button>
    </nav>
  );
}
