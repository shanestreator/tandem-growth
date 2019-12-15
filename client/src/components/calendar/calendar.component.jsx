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
      const { data } = await axios.get('/api/data/plants')
      const plants = getPlantWaterSchedule(data)

      this.setState({ plants: plants })

    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="calendar">
        <MonthView plantData={this.state.plants} />
      </div>
    )
  }
}

export default Calendar;