import React from 'react';
import axios from 'axios';

import MonthView from '../month/month.component'
import getPlantWaterSchedule from '../../utils/getPlantWaterSchedule'

import './calendar.styles.scss'

class Calendar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plants: []
    }
  }

  async componentDidMount() {
    try {
      const localStoragePlantData = JSON.parse(localStorage.getItem('watered'))
      const { data } = await axios.get('/api/data/plants')
      const plants = getPlantWaterSchedule(data)
      console.log('localStorage: ', localStoragePlantData)
      if (!localStoragePlantData) {
        localStorage.setItem('watered', JSON.stringify(plants))

        this.setState({ plants: plants })
      }
      else if (localStoragePlantData) {
        this.setState({ plants: localStoragePlantData })
      }
      else {
        this.setState({ plants: plants })
      }
    } catch (error) {
      console.error(error)
    }
  }

  updatePlants = (plants) => {
    console.log('updatePlants: ', plants)
    this.setState({ plants })
  }

  render() {
    return (
      <div className="calendar">
        <MonthView plantData={this.state.plants} updatePlants={this.updatePlants} />
      </div>
    )
  }
}

export default Calendar;