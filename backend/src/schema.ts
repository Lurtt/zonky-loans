import * as path from 'path'
import { makePrismaSchema } from 'nexus-prisma'

import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'
import * as types from './resolvers'

export const schema = makePrismaSchema({
  types,
  
  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './context.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
})
