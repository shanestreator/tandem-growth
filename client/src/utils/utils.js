import moment from 'moment'

export const formatDate = (temp, days, extra = 0) => {
  return moment(temp).add(days + extra, 'd').format('YYYY-MM-DD')
}