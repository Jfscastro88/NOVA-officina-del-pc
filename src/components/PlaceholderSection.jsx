function PlaceholderSection({ id, tag, title, text }) {
  return (
    <section id={id} className="px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-2xl animate-fade-up">
        <div className="card-depth rounded-3xl border-2 border-dashed border-accent/30 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center backdrop-blur-sm">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-yellow">
            {tag}
          </span>
          <h2 className="mt-3 font-display text-3xl text-white">{title}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/65">{text}</p>
        </div>
      </div>
    </section>
  )
}

export default PlaceholderSection
