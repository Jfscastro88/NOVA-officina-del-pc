import part1 from './phrases/part-1.json'
import part2 from './phrases/part-2.json'
import part3 from './phrases/part-3.json'

const phrases = { ...part1, ...part2, ...part3 }

function walk(value, lang) {
  if (typeof value === 'string') return phrases[value]?.[lang] ?? value
  if (Array.isArray(value)) return value.map((item) => walk(item, lang))
  if (value && typeof value === 'object') {
    const next = {}
    for (const [key, item] of Object.entries(value)) next[key] = walk(item, lang)
    return next
  }
  return value
}

export function applyPhrases(value, lang) {
  if (!value || !lang || lang === 'it') return value
  return walk(value, lang)
}
