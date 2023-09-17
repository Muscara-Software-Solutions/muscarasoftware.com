const stats = [
  { label: 'Class time saved (per school)', value: '7 days' },
  { label: 'Wasted expenses saved (yearly)', value: '$25,000' },
  { label: 'Unique page visitors (monthly)', value: '32,000' },
]

export default function Stats() {
  return (
    <div className="bg-white pt-10 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Statistics</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                We design our solutions to add to our lives and add value to the world. Check out our numbers to see how we're trusted by thousands of <span className="text-green-400">educators, engineers, business owners, and so many more</span> worldwide.
              </p>
              <p className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                We don't just solve your needs, we help revolutionize your industry. Our solutions save your company thousands, increase your revenue or online expansion, and enable student success through smarter movement.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-green-400">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
