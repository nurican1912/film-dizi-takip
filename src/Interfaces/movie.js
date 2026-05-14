/**
 * @typedef {Object} Movie
 * @property {string} id
 * @property {string} title
 * @property {'film'|'dizi'} type
 * @property {string} genre
 * @property {number} year
 * @property {'izlenecek'|'izleniyor'|'izlendi'} status
 * @property {number} rating  - 0 ile 5 arası
 * @property {string} createdAt
 */

export const GENRES = [
  'Aksiyon',
  'Animasyon',
  'Belgesel',
  'Bilim Kurgu',
  'Dram',
  'Fantastik',
  'Gerilim',
  'Komedi',
  'Korku',
  'Romantik',
  'Suç',
  'Tarih',
];

export const STATUS_OPTIONS = [
  { value: 'izlenecek', label: 'İzlenecek' },
  { value: 'izleniyor', label: 'İzleniyor' },
  { value: 'izlendi',   label: 'İzlendi' },
];

export const STATUS_COLORS = {
  izlenecek: 'bg-yellow-100 text-yellow-800',
  izleniyor: 'bg-blue-100 text-blue-800',
  izlendi:   'bg-green-100 text-green-800',
};

/**
 * Yeni bir Movie nesnesi oluşturmak için şablon.
 * @returns {Movie}
 */
export function createEmptyMovie() {
  return {
    id: '',
    title: '',
    type: 'film',
    genre: GENRES[0],
    year: new Date().getFullYear(),
    status: 'izlenecek',
    rating: 0,
    createdAt: '',
  };
}
