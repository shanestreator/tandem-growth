import 'jest'

import { dummyInput, dummyData } from '../data/dummyData'
import getPlantWaterSchedule from './getPlantWaterSchedule'

it('getPlantWaterSchedule should be truthy', () => {
  expect(getPlantWaterSchedule(dummyInput)).toBeTruthy()
})

it('getPlantWaterSchedule returns an array', () => {
  expect(getPlantWaterSchedule(dummyInput)).toBeInstanceOf(Array)
})

it('getPlantWaterSchedule returns an array of objects', () => {
  expect(getPlantWaterSchedule(dummyInput).map(data => typeof data)).toEqual(dummyData.map(data => typeof data))
})

it('getPlantWaterSchedule should return the correct title', () => {
  expect(getPlantWaterSchedule(dummyInput)[0].title).toBe(dummyData[0].title)
  expect(getPlantWaterSchedule(dummyInput)[25].title).toBe(dummyData[25].title)
  expect(getPlantWaterSchedule(dummyInput)[50].title).toBe(dummyData[50].title)
  expect(getPlantWaterSchedule(dummyInput)[75].title).toBe(dummyData[75].title)
  expect(getPlantWaterSchedule(dummyInput)[100].title).toBe(dummyData[100].title)
})

it('getPlantWaterSchedule should return the correct date', () => {
  expect(getPlantWaterSchedule(dummyInput)[0].date).toBe(dummyData[0].date)
  expect(getPlantWaterSchedule(dummyInput)[25].date).toBe(dummyData[25].date)
  expect(getPlantWaterSchedule(dummyInput)[50].date).toBe(dummyData[50].date)
  expect(getPlantWaterSchedule(dummyInput)[75].date).toBe(dummyData[75].date)
  expect(getPlantWaterSchedule(dummyInput)[100].date).toBe(dummyData[100].date)
})