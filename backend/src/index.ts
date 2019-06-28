import { config } from 'dotenv'
config({ path: '.env' })

import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'

import { schema } from './schema'

const options = {
  port: process.env.SERVER_PORT,
}

const server = new GraphQLServer({
  schema,
  context: { prisma },
})
server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`))