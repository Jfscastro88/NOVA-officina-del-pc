export default function CompatibilityTable({ rows, compact = false }) {
  if (!rows?.length) return null

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 sm:rounded-2xl">
      <div
        className={`grid gap-px bg-white/10 ${
          compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {!compact && (
          <div className="grid grid-cols-3 bg-accent/20 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] sm:px-4 sm:py-2.5 sm:text-xs">
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
                ? 'flex flex-col gap-0.5 rounded-xl border border-white/10 p-2.5 sm:gap-1 sm:rounded-2xl sm:p-4'
                : 'grid grid-cols-3 gap-2 px-3 py-2.5 text-xs sm:px-4 sm:py-3 sm:text-sm'
            }`}
          >
            <span className={`break-words font-bold text-white ${compact ? 'text-sm sm:text-base' : ''}`}>
              {compact && '🧩 '}
              {row.component}
            </span>
            <span className={`break-words ${compact ? 'text-xs font-semibold text-accent sm:text-sm' : 'text-accent'}`}>
              ↔ {row.compatible}
            </span>
            {!compact && row.example && (
              <span className="break-words text-white/60">{row.example}</span>
            )}
            {compact && row.example && (
              <span className="break-words text-[11px] text-white/50 sm:text-xs">{row.example}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
