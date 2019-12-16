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
      plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false}]
      addDayCount = 0
    }
    else {
      const currentDate = formatDate(tempDate, days_water_after)
      tempDate = currentDate
      plantEvents = [...plantEvents, { title: `💧 ${name}`, date: currentDate, plantId, watered: false}]
      addDayCount++
    }
  } while (tempDate < endDate);

  tempDate = startDate

  return plantEvents
}

const getPlantWaterSchedule = (plants) => {
    let plantEvents = []

    plants.forEach((plant, idx) => {
      const { name, days_water_after, plantId, watered} = plant

      if (!plantEvents.length) {
        plantEvents = [...plantEvents, { title: `💧 ${name}`, date: startDate, plantId, watered: false}]
      }
      else if (plantEvents[idx-1].title !== name) {
          plantEvents = [...plantEvents, { title: `💧 ${name}`, date: startDate, plantId, watered: false}]
      }

      if (days_water_after % 7 === 0) {
        plantEvents = pushPlantEvent(plantEvents, plant, null)
        return
      }
      else if (days_water_after % 3 === 0) {
        plantEvents = pushPlantEvent(plantEvents, plant, 1)
        return
      }
      else if (days_water_after % 2 === 0) {
        plantEvents = pushPlantEvent(plantEvents, plant, 2)
        return
      }
    })

    return plantEvents
}

export default getPlantWaterSchedule