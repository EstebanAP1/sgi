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

export interface Module {
  title: string
  url: string[]
  icon: string
  submodules?: boolean | Submodule[]
}

export interface Submodule {
  title: string
  url: string
  icon: string
}
