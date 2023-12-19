import { PlusIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Kevin Muscara',
    role: 'Co-Founder & Chief Executive Officer',
    link: "https://www.linkedin.com/in/kevinmuscara",
    imageUrl: 'https://avatars.githubusercontent.com/u/29820047?v=4',
  },
  {
    name: 'Pacer Metzenberg',
    role: 'Co-Founder & Chief Operating Officer',
    link: "https://www.linkedin.com/in/pacer-metzenberg-5a2131b/",
    imageUrl: 'https://media.licdn.com/dms/image/C4E03AQEBGxMWebnWmg/profile-displayphoto-shrink_800_800/0/1516352376607?e=1708560000&v=beta&t=KxehQWZTQ9BJs1pQN5wvmI-mxtb3Jv4HPuvxboEr_jI',
  },
]

export default function Team() {
  return (
    <div className="mx-auto max-w-lg">
      <div>
        <div className="text-center">
          <h2 className="mt-2 text-4xl font-bold leading-10 text-green-400">Muscara Software Solutions</h2>
          <p className="mt-4 text-sm text-gray-500">
            Enabling success through data-driven insights. We are experienced software and hardware engineers with a track record in behavior-driven and test-driven software design, as well as software development management.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">Meet the founders</h3>
        <ul className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
          {people.map((person, personIdx) => (
            <li key={personIdx} className="flex items-center justify-between space-x-3 py-4">
              <div className="flex min-w-0 flex-1 items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                  <p className="truncate text-sm font-medium text-gray-500">{person.role}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a href={person.link} target="_blank" rel='noreferrer' className="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900">
                  <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Connect <span className="sr-only">{person.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
