import {useState} from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Firma Avanzada Online',
    id: 'tier-startup',
    href: null,
    price: { monthly: '$60', annually: '$576' },
    description: 'Permite a personas naturales a través de la comprobación de su Clave Única comprar una Firma Electrónica Avanzada Online. ',
    features: [
      'Compra 100% online con clave única sin validación presencial',
      'Permite firmar documentos ilimitados desde cualquier lugar sin e-token.',
      'Firma Acreditada por el Ministerio de Economía.',
      'Firma documentos en formato PDF hasta 50 MB.',
      'Debe conocer su Clave Única del Registro Civil.',
      'Debe contar con Cédula de Identidad vigente.'
    ],
    mostPopular: true,
  }
]

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/mes' },
  { value: 'annually', label: 'Annually', priceSuffix: '/año' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Producto({handleClickFAO}) {
  const [frequency, setFrequency] = useState(frequencies[1])

  return (
    <div className="py-10 flex justify-center">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={classNames(
            tier.mostPopular ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200',
            'rounded-3xl p-8 max-w-96'
          )}
        >
          <h3
            id={tier.id}
            className={classNames(
              tier.mostPopular ? 'text-primary' : 'text-gray-900',
              'text-lg font-semibold leading-8'
            )}
          >
            {tier.name}
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
            <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
          </p>
          <a
            href={tier.href}
            aria-describedby={tier.id}
            onClick={() => handleClickFAO()}
            className={classNames(
              tier.mostPopular
                ? 'bg-primary text-white shadow-sm hover:bg-phover'
                : 'text-primary ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
              'cursor-pointer mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
            )}
          >
            COMPRAR PLAN
          </a>
          <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Producto
