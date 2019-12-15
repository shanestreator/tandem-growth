import { formatDate } from './utils'

const startDate = '2019-12-16'
let tempDate = '2019-12-16'

const pushPlantEvent = (plantEvents, plant, count = null) => {
  const { name, days_water_after, plantId } = plant
  const endDate = '2020-03-09'
  let addDayCount = 0
  
  do {
    if (addDayCount === count) {
      const currentDate = formatDate(tempDate, days_water_after, 1)
      tempDate = currentDate
      plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId }]
      addDayCount = 0
    }
    else {
      const currentDate = formatDate(tempDate, days_water_after)
      tempDate = currentDate
      plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId }]
      addDayCount++
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
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: startDate, plantId }]
      }
      else if (plantEvents[idx-1].title !== name) {
          plantEvents = [...plantEvents, { title: `💧 ${name}`, date: startDate, plantId }]
      }

      // Considering the start date we don't have to worry about days divisible by 7
      if (days_water_after % 7 === 0) {
        plantEvents = pushPlantEvent(plantEvents, plant)
        return
      }
      // Every other days_water_after adds +1 day then reset
      else if (days_water_after % 3 === 0) {
        plantEvents = pushPlantEvent(plantEvents, plant, 1)
        return
      }
      // Every 2nd days_water_after adds +1 day then reset
      else if (days_water_after % 2 === 0) {
        plantEvents = pushPlantEvent(plantEvents, plant, 2)
        return
      }
    })

    return plantEvents
}

export default getPlantWaterSchedule