const API_URL = import.meta.env.VITE_API_URL || '';

export async function getMessage() {
  const res = await fetch(`${API_URL}/api/message`);
  if (!res.ok) throw new Error('Impossible de contacter le backend');
  return res.json();
}
