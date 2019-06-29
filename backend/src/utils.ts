import { reduce, compose } from 'ramda'

import { Loan } from './types'

const sumAmount = (accum: number, loan: Loan) => accum + loan.amount
const averageLoans = (data: []) => (sum: number) => sum / data.length

export const alphabetical = (a: string, b: string) =>  a.localeCompare(b)
export const byRating = (rating: string) => (item: Loan) => item.rating === rating
export const totalAmountByRating = (data: []) => compose(
  averageLoans(data),
  reduce(sumAmount, 0),
)(data)