export function Star({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 2l3.2 9.8H29l-8 5.8 3.1 9.6L16 24.4 7.9 27.2l3.1-9.6-8-5.8h9.8L16 2z" />
    </svg>
  )
}

export function ArrowScribble({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 50"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 25c20-18 40 18 60 0 8-6 16-8 24-6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M78 12l18 13-18 13"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Squiggle({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 28C32 4 56 36 80 12s48 20 52 4"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Spark({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 2v24M2 14h24M5 5l18 18M23 5L5 23"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BrushStroke({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M4 14c30-8 60 8 90 0s60-8 96 4c4 1 8 2 10 4-2-2-6-3-10-4-36-12-66 4-96 4S34 6 4 14z"
        opacity="0.85"
      />
    </svg>
  )
}

export function CircleDoodle({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M30 6c14 0 24 10 24 24S44 54 30 54 6 44 6 30 16 6 30 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />
    </svg>
  )
}
