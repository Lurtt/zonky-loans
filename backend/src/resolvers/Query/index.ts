import { prismaObjectType } from 'nexus-prisma'
import { sort } from 'ramda'

import { zonkyClient } from '../../api'
import { Loan } from '../../types'

const ratingSet = new Set()
const alphabetical = (a: string, b: string) =>  a.localeCompare(b)
const addRating = (loan: Loan) => ratingSet.add(loan.rating)

const ratings = {
  type: 'String',
  resolve: async () => {
    const { data } = await zonkyClient.get('/marketplace')
    if (ratingSet.size === 0) {
      data.forEach(addRating)
    }

    return sort(alphabetical, [...ratingSet])
  }
}

export const Query = prismaObjectType({
  name: 'Query',
  definition: t => {
    t.list.field('ratings', ratings)
  },
})
