export function Star({ className = '', style = {} }) {
  return (
    <svg
      className={`doodle doodle-star ${className}`}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z" />
    </svg>
  )
}

export function Arrow({ className = '', style = {} }) {
  return (
    <svg
      className={`doodle doodle-arrow ${className}`}
      style={style}
      viewBox="0 0 80 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 20h60M52 8l16 12-16 12"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Squiggle({ className = '', style = {} }) {
  return (
    <svg
      className={`doodle doodle-squiggle ${className}`}
      style={style}
      viewBox="0 0 120 30"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 18c16-20 32 20 48 0s32 20 48 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Spark({ className = '', style = {} }) {
  return (
    <svg
      className={`doodle doodle-spark ${className}`}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
