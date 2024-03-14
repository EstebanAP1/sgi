import { randomUUID } from 'crypto'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchFilteredUser() {
  noStore()
  // TODO: Fetch data from API
  const users = await Promise.resolve([
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 1,
      name: 'John Doe',
      email: 'example@example.com',
      created_at: '2021-10-12'
    },
    {
      id: randomUUID(),
      idtype: 'TI',
      idnumber: 2,
      name: 'Jane Doe',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 3,
      name: 'John Smith',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 4,
      name: 'John Doe',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 5,
      name: 'Jane Doe',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 6,
      name: 'John Smith',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 7,
      name: 'John Doe',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 8,
      name: 'Jane Doe',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 9,
      name: 'John Smith',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 10,
      name: 'John Doe',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 11,
      name: 'Jane Doe',
      email: 'example@example.com',
      created_at: '2021-10-10'
    },
    {
      id: randomUUID(),
      idtype: 'CC',
      idnumber: 12,
      name: 'John Smith',
      email: 'example@example.com',
      created_at: '2021-10-10'
    }
  ])

  return users
}
