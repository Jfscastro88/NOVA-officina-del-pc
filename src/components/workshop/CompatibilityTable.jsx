export default function CompatibilityTable({ rows, compact = false }) {
  if (!rows?.length) return null

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div
        className={`grid gap-px bg-white/10 ${
          compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {!compact && (
          <div className="grid grid-cols-3 bg-accent/20 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
            <span>Componente</span>
            <span>Deve essere compatibile con</span>
            <span>Esempio reale</span>
          </div>
        )}
        {rows.map((row) => (
          <div
            key={row.component}
            className={`bg-white/5 ${
              compact
                ? 'flex flex-col gap-1 rounded-2xl border border-white/10 p-4'
                : 'grid grid-cols-3 gap-2 px-4 py-3 text-sm'
            }`}
          >
            <span className={`font-bold text-white ${compact ? 'text-base' : ''}`}>
              {compact && '🧩 '}
              {row.component}
            </span>
            <span className={compact ? 'text-accent font-semibold' : 'text-accent'}>
              ↔ {row.compatible}
            </span>
            {!compact && row.example && (
              <span className="text-white/60">{row.example}</span>
            )}
            {compact && row.example && (
              <span className="text-xs text-white/50">{row.example}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
