function getPlayerStats() {
  const ls = localStorage.getItem('player-statistics');
  if (ls === null) return [];
  try {
    const parsed = JSON.parse(ls);
    if (Array.isArray(parsed)) return parsed;
    else return [];
  } catch {
    return [];
  }
}
