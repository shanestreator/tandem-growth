import React from 'react';
import moment from 'moment'

import MonthDay from '../month-day/month-day.component'

import './month-body.styles.scss'

class MonthBody extends React.Component {

  calendarViewMonth = () => {
    // Calculate the start date of the selected month [Sun(0)-Sat(6)]
    const monthStartDay = +moment().startOf('month').format("e")
    const daysInMonth = +moment().daysInMonth()
    // const monthStartDay = +moment().subtract(1, 'months').startOf('month').format("e")
    // const daysInMonth = +moment().subtract(1, 'months').daysInMonth()
    
    let daysArray = []
    let startMonth = null
    for (let i = 0; i < 35; i++) {
      if (startMonth === null && i === monthStartDay) {
        startMonth = true
      }
      daysArray = [
        ...daysArray, 
        (<MonthDay
          idx={i}
          start={monthStartDay}
          end={daysInMonth}
          startMonth={startMonth}
          plants = {this.props.plants}
        />)
      ]
    }
    startMonth = null
    return daysArray
  }

  render() {
    return (
      <div className='month-body'>
      {
        this.calendarViewMonth().map(day => {
          return day
        })
      }
      </div>
    )
  }
}

export default MonthBody