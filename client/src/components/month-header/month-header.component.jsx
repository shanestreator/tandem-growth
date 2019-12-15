import React from 'react'

import './month-header.styles.scss'

const MonthHeader = () => {
  return (
    <div className='month-header'>
        <div className='day-of-week'>Sunday</div>
        <div className='day-of-week'>Monday</div>
        <div className='day-of-week'>Tuesday</div>
        <div className='day-of-week'>Wednesday</div>
        <div className='day-of-week'>Thursday</div>
        <div className='day-of-week'>Friday</div>
        <div className='day-of-week'>Saturday</div>
    </div>
  )
}

export default MonthHeader