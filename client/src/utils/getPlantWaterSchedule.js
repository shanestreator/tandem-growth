import { formatDate } from './utils'

const startDate = '2019-12-16'
let tempDate = '2019-12-16'

const pushPlantEvent = (plantEvents, plantName, days_water_after, count = null) => {
  const endDate = '2020-03-09'

  let addDayCount = 0
  
  do {
    if (addDayCount === count) {
      const currentDate = formatDate(tempDate, days_water_after, 1)
      tempDate = currentDate
      plantEvents = [...plantEvents, { title: `💧 ${plantName}`, date: currentDate }]
      addDayCount = 0
    }
    else {
      const currentDate = formatDate(tempDate, days_water_after)
      tempDate = currentDate
      plantEvents = [...plantEvents, { title: `💧 ${plantName}`, date: currentDate }]
      addDayCount++
    }
  } while (tempDate < endDate);

  tempDate = startDate

  return plantEvents
}

const getPlantWaterSchedule = (plants) => {
    let plantEvents = []

    plants.forEach(({ name, days_water_after }, idx) => {
      if (!plantEvents.length) {
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: startDate }]
      }
      else if (plantEvents[idx-1].title !== name) {
          plantEvents = [...plantEvents, { title: `💧 ${name}`, date: startDate }]
      }

      // We don't have to worry about days that are divisible by 7 with no remainder
      if (days_water_after % 7 === 0) {
        plantEvents = pushPlantEvent(plantEvents, name, days_water_after)

        return
      }
      // Every other days_water_after adds +1 day then reset
      else if (days_water_after % 3 === 0) {
        plantEvents = pushPlantEvent(plantEvents, name, days_water_after, 1)

        return
      }
      // Every 2nd days_water_after adds +1 day then reset
      else if (days_water_after % 2 === 0) {
        plantEvents = pushPlantEvent(plantEvents, name, days_water_after, 2)

        return
      }
    })

    return plantEvents
}

export default getPlantWaterSchedule