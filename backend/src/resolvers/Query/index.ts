import { prismaObjectType } from 'nexus-prisma'

import { zonkyClient } from '../../api'
import { Loan } from '../../types'

const ratingSet = new Set()
const addRating = (loan: Loan) => ratingSet.add(loan.rating)

const ratings = {
  type: 'String',
  resolve: async () => {
    const { data } = await zonkyClient.get('/marketplace')
    if (ratingSet.size === 0) {
      data.forEach(addRating);
    }

    return [...ratingSet]
  }
}

export const Query = prismaObjectType({
  name: 'Query',
  definition: t => {
    t.list.field('ratings', ratings)
  },
})
