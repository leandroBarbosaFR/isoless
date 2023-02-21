'use client';
import { CldImage } from 'next-cloudinary';

const people = [
  {
    name: 'Helena G. Lund Palau',
    role: 'Paediatrics Specialist',

    imageUrl:
      'https://res.cloudinary.com/leandrobarbosalemos/image/upload/v1676935113/helena_palau.jpg',
    bio: 'Passionate paediatrics trainee in London with interests in gene therapy, digital health, and innovation. Dedicated to improving patients lives. Sailing enthusiast.',
  },
  {
    name: 'Marlon Romero',
    role: 'XR Creator',

    imageUrl:
      'https://res.cloudinary.com/leandrobarbosalemos/image/upload/v1676935245/marlon.jpg',
    bio: 'Unity3D Houdini SideFX Autodesk Maya NVIDIA Omniverse Substance Designer and Painter .',
  },
  {
    name: 'Héléna Antoniadis',
    role: 'Finance Expert',

    imageUrl:
      'https://res.cloudinary.com/leandrobarbosalemos/image/upload/v1676935353/helene.png',
    bio: '15+ yrs exp finance pro in luxury industry, supported MDs profitability, adding data science and ML to pivot to product management.',
  },
  {
    name: 'Krishini Patel',
    role: 'Data Specialist',

    imageUrl:
      'https://res.cloudinary.com/leandrobarbosalemos/image/upload/v1676935450/krishini.jpg',
    bio: 'Infrastructure advisor with 4 years exp in cost modelling in transport. Completed 10-week data science bootcamp, proficient in Python, SQL, Machine Learning. Check out data projects: https://github.com/krishinipatel.',
  },
  {
    name: 'Leandro Barbosa',
    role: 'Web Developer',

    imageUrl:
      'https://res.cloudinary.com/leandrobarbosalemos/image/upload/v1676934513/leandro.jpg',
    bio: '11 years in business management, completing FullStack Web Development at Le Wagon & teaching assistant. Working as Front-End developer @indemnisation.com.',
  },
  // More people...
]

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
