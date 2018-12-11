import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers';
import * as koaPlayground from "graphql-playground-middleware-koa"

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
} as any)

server.start(() => console.log('Server is running on http://localhost:4000'))
