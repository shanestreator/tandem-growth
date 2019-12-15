import React from 'react';
import moment from 'moment';

import './month-day.styles.scss'

class MonthDay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.idx === +nextProps.start) {
  //     return {toggleStart: true}
  //   } else {
  //     return null
  //   }
  // }


  render() {
    const { idx, start, end, startMonth, plants } = this.props
    const dayNumber = idx - start + 1
    console.log(dayNumber, plants)

    return (
      <>
      {
        startMonth && dayNumber <= end ?
        (
        <div className='month-day'>
          <p className="day pl-1">
            {dayNumber}
          </p>
        </div>
        )
        :
        (
        <div className='month-day not-valid-day'>
        </div>
        )
      }
      </>
    )
  }
}

export default MonthDay