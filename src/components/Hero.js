import { AcademicCapIcon, BuildingStorefrontIcon, ComputerDesktopIcon, TruckIcon } from '@heroicons/react/24/outline'

const features = [
  { name: 'Education', description: 'Promoting student success through smarter technology.', icon: AcademicCapIcon },
  { name: 'Hospitality', description: `Don't let your business go unseen with improved SEO tools.`, icon: BuildingStorefrontIcon },
  { name: 'Information Technology', description: 'Professional grade software development, consulting, and testing.', icon: ComputerDesktopIcon },
  { name: 'Manufacturing', description: 'Machine learning to power workflow automation and minimize downtime.', icon: TruckIcon },
]

export default function Hero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-bold leading-7 text-green-400">Muscara Software</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We enable success through <span className='text-green-400'>data-driven</span> insights</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Let us add value to your industry, and the world.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <feature.icon className="absolute left-0 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
