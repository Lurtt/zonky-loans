import { prismaObjectType } from 'nexus-prisma'
import { queryField, stringArg } from 'nexus'
import { sort, filter } from 'ramda'

import { Loan } from '../../types'
import { alphabetical, byRating, totalAmountByRating } from '../../utils'
import { zonkyClient } from '../../api'

const ratingSet = new Set()
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

export const averageLoansAmount = queryField("averageLoansAmount", {
  type: 'Float',
  args: {
    rating: stringArg({ required: true }),
  },
  resolve: async (_, { rating }) => {
    const { data } = await zonkyClient.get('/marketplace')
    const loansByRating: Loan[] = filter(byRating(rating.toUpperCase()), data)

    return totalAmountByRating(loansByRating)
  },
});

const QueryObject = {
  name: 'Query',
  definition: (t: any) => {
    t.list.field('ratings', ratings)
  },
}

export const Query = prismaObjectType<'Query'>(QueryObject)
