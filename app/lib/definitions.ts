import { UUID } from 'crypto'

export interface User {
  id: UUID
  idtype: string
  idnumber: number
  name: string
  email: string
  created_at: string
}

export interface FilteredUser extends User {
  document: string
}
