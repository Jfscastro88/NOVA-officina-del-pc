import {
  IconCpu,
  IconDeviceSdCard,
  IconDatabase,
  IconCircuitCell,
  IconBolt,
  IconStack2,
} from '@tabler/icons-react'
import { Spark } from './Doodles'

const components = [
  {
    name: 'CPU',
    desc: 'Il cervello del computer: calcola e coordina tutto.',
    Icon: IconCpu,
  },
  {
    name: 'RAM',
    desc: 'Memoria veloce per i programmi aperti in questo momento.',
    Icon: IconStack2,
  },
  {
    name: 'SSD',
    desc: 'Archiviazione super veloce per sistema e file.',
    Icon: IconDeviceSdCard,
  },
  {
    name: 'HDD',
    desc: 'Disco meccanico per tanta memoria a basso costo.',
    Icon: IconDatabase,
  },
  {
    name: 'Scheda Madre',
    desc: 'Collega tutti i componenti tra loro.',
    Icon: IconCircuitCell,
  },
  {
    name: 'Alimentatore',
    desc: 'Porta energia a ogni pezzo del PC.',
    Icon: IconBolt,
  },
]

export default function Hardware() {
  return (
    <section id="hardware" className="section hardware-section">
      <Spark className="section-doodle hardware-doodle" />

      <div className="section-header">
        <span className="section-tag">Componenti</span>
        <h2 className="section-title">Alcuni componenti che scopriremo</h2>
      </div>

      <div className="hardware-grid">
        {components.map(({ name, desc, Icon }) => (
          <article key={name} className="hardware-card">
            <div className="hardware-icon">
              <Icon size={32} stroke={2} />
            </div>
            <h3>{name}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
