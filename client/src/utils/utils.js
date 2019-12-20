import moment from 'moment'

export const formatDateNext = (temp, days) => {
  return moment(temp).add(days, 'd').format('YYYY-MM-DD')
}

export const formatDateAdd = (temp, days, addNum = 0) => {
  return moment(temp).add(days + addNum, 'd').format('YYYY-MM-DD')
}

export const formatDateSub = (temp, days, subNum = 0) => {
  return moment(temp).add(days, 'd').subtract(subNum, 'd').format('YYYY-MM-DD')
}