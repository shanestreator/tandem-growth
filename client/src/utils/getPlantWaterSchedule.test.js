import 'jest'

import tandemData from '../data/Apprentice_WeGrowInTandem_Data'
import getPlantWaterSchedule from './getPlantWaterSchedule'
import waterScheduleResult from '../data/waterSchedule_Data'

it('getPlantWaterSchedule should be truthy', () => {
  expect(getPlantWaterSchedule(tandemData)).toBeTruthy()
})

it('getPlantWaterSchedule should return the correct title', () => {
  expect(getPlantWaterSchedule(tandemData)[0].title).toBe(waterScheduleResult[0].title)
  expect(getPlantWaterSchedule(tandemData)[50].title).toBe(waterScheduleResult[50].title)
  expect(getPlantWaterSchedule(tandemData)[100].title).toBe(waterScheduleResult[100].title)
})

it('getPlantWaterSchedule should return the correct date', () => {
  expect(getPlantWaterSchedule(tandemData)[0].date).toBe(waterScheduleResult[0].date)
  expect(getPlantWaterSchedule(tandemData)[1].date).toBe(waterScheduleResult[1].date)
  expect(getPlantWaterSchedule(tandemData)[2].date).toBe(waterScheduleResult[2].date)
})