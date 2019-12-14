import React from 'react';

import MonthView from '../month/month.component'
// import WeekView from '../week/week.component'
import jsonPlantData from '../../data/Apprentice_WeGrowInTandem_Data'
import getPlantWaterSchedule from '../../utils/getPlantWaterSchedule'

class Calendar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plants: []
    }
  }

  componentDidMount() {
    const plants = getPlantWaterSchedule(jsonPlantData)

    this.setState({ plants: plants })
  }

  render() {
    return <MonthView plantData={this.state.plants} />
  }
}

export default Calendar;