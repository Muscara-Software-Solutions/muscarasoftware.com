export default function Banner() {
  return (
    <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <a href="mailto:support@muscarasoftware.com">
          <strong className="font-semibold">Free Consultation</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Schedule a free consultation today to meet with our industry experts&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
      </div>
    </div>
  )
}
