import { formatDateNext, formatDateAdd, formatDateSub } from './utils'

const startDate = '2019-12-16',
      endDate = '2020-03-09'
let tempDate = '2019-12-16'

export const pushPlantEvent = (plantEvents, plant, options = {interval: null, resetCount: 0}) => {
  const { name, days_water_after, plantId } = plant,
        { interval, resetCount } = options
  let intervalCount = 0

  do {
      const intervalMatch = intervalCount === interval,
            intervalReset = intervalCount === resetCount
      // Days: 1
      if (days_water_after === 1) {
        const currentDate = intervalMatch ? formatDateAdd(tempDate, 1, 2) : formatDateNext(tempDate, 1)
        tempDate = currentDate
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false }]

        intervalReset ? intervalCount = 0 : intervalCount++
      }
      // Days: 2
      else if (days_water_after === 2) {
        const currentDate = intervalMatch ? formatDateAdd(tempDate, 2, 1) : formatDateNext(tempDate, 2)
        tempDate = currentDate
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false }]

        intervalReset ? intervalCount = 0 : intervalCount++
      }
      // Days: 3
      else if (days_water_after === 3) {
        const currentDate = intervalMatch ? formatDateAdd(tempDate, 3, 1) : formatDateNext(tempDate, 3)
        tempDate = currentDate
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false }]

        intervalReset ? intervalCount = 0 : intervalCount++
      }
      // Days: 4
      else if (days_water_after === 4) {
        const currentDate = intervalMatch ? formatDateSub(tempDate, 4, 1) : formatDateNext(tempDate, 4)
        tempDate = currentDate
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false }]

        intervalReset ? intervalCount = 0 : intervalCount++
      }
      // Days: 5
      else if (days_water_after === 5) {
        const currentDate = intervalMatch ? formatDateSub(tempDate, 5, 1) : formatDateNext(tempDate, 5)
        tempDate = currentDate
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false }]

        intervalReset ? intervalCount = 0 : intervalCount++
      }
      // Days: 6
      else if (days_water_after === 6) {
        const currentDate = formatDateAdd(tempDate, 6, 1)
        tempDate = currentDate
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false }]

        intervalReset ? intervalCount = 0 : intervalCount++
      }
      // Days: 7 || 14
      else if (days_water_after % 7 === 0) {
        const currentDate = formatDateAdd(tempDate, days_water_after)
        tempDate = currentDate
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false }]

        intervalReset ? intervalCount = 0 : intervalCount++
      }
  } while (tempDate < endDate);

  tempDate = startDate

  return plantEvents
}

const getPlantWaterSchedule = (plants) => {
    let plantEvents = []

    plants.forEach((plant, idx) => {
      const { name, days_water_after, plantId} = plant

      if (!plantEvents.length) {
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: startDate, plantId, watered: false }]
      }
      else if (plantEvents[idx-1].title !== name) {
          plantEvents = [...plantEvents, { title: `💧 ${name}`, date: startDate, plantId, watered: false }]
      }

      // Days: 1
      if (days_water_after === 1) {
        const options = { interval: 4, resetCount: 4 }
        plantEvents = pushPlantEvent(plantEvents, plant, options)
        return
      }
      // Days: 2
      else if (days_water_after === 2) {
        const options = { interval: 2, resetCount: 2 }
        plantEvents = pushPlantEvent(plantEvents, plant, options)
        return
      }
      // Days: 3
      else if (days_water_after === 3) {
        const options = { interval: 1, resetCount: 1 }
        plantEvents = pushPlantEvent(plantEvents, plant, options)
        return
      }
      // Days: 4
      else if (days_water_after === 4) {
        const options = { interval: 0, resetCount: 1 }
        plantEvents = pushPlantEvent(plantEvents, plant, options)
        return
      }
      // Days: 5
      else if (days_water_after === 5) {
        const options = { interval: 0, resetCount: 2 }
        plantEvents = pushPlantEvent(plantEvents, plant, options)
        return
      }
      // Days: 6
      else if (days_water_after === 6) {
        const options = { interval: 0 }
        plantEvents = pushPlantEvent(plantEvents, plant, options)
        return
      }
      // Days: 7 || 14
      else if (days_water_after % 7 === 0) {
        plantEvents = pushPlantEvent(plantEvents, plant)
        return
      }
    })

    return plantEvents
}

export default getPlantWaterSchedule