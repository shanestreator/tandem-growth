import 'jest'

import tandemData from '../data/Apprentice_WeGrowInTandem_Data'
import getPlantWaterSchedule from './getPlantWaterSchedule'
import waterScheduleResult from '../data/waterSchedule_Data'

it('getPlantWaterSchedule should be truthy', () => {
  expect(getPlantWaterSchedule(tandemData)).toBeTruthy()
})

it('getPlantWaterSchedule should return the correct data', () => {
  expect(getPlantWaterSchedule(tandemData)).toEqual(waterScheduleResult)
})