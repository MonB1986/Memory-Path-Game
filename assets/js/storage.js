function getPlayerStats() {
  const ls = localStorage.getItem('player-statistics')
  if (ls === null) return []
  const parsed = JSON.parse(ls)
  if (Array.isArray(parsed)) return parsed
  return []
}