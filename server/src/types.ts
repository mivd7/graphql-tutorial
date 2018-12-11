import { Prisma, Int } from './generated/prisma-client'

export interface Context {
  prisma: Prisma
}

export interface Post {
  id: string
  createdAt: string
  updatedAt: string
  published: boolean
  title: string
  content: string | null
}

export interface User {
  id: Int
  email: string 
}
