import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function NavDropdown({
  label,
  isOpen,
  onToggle,
  onClose,
  items,
  accent = false,
  variant = 'navbar',
}) {
  const dropdownRef = useRef(null)
  const isFooter = variant === 'footer'

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose()
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-yellow ${
          accent && !isFooter ? 'text-[#FACC15]' : 'text-white/70'
        } ${isFooter ? 'text-white/60' : ''}`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <ul
          role="menu"
          className={`absolute z-50 min-w-[200px] overflow-hidden rounded-2xl border-2 border-accent/30 bg-dark-purple/95 py-1 shadow-[0_8px_32px_rgba(124,58,237,0.3)] backdrop-blur-xl animate-fade-up ${
            isFooter ? 'bottom-full left-0 mb-2' : 'left-1/2 top-full mt-2 -translate-x-1/2'
          }`}
        >
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                role="menuitem"
                to={item.href}
                onClick={onClose}
                className="block px-4 py-2.5 text-center text-sm font-semibold text-white/70 transition-colors hover:bg-accent/20 hover:text-yellow"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
