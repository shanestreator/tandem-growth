import React from 'react';
import moment from 'moment';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ModalDay from '../modal-day/modal-day.component'

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import './month.styles.scss'

const $ = window.$;

class MonthView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      dayPlantData: null
    }
  }
  // get current date clicked (event or date) and open a modal with that current date
  handleDayClick = (e) => {
    let { plantData } = this.props
    console.log('e: ', e)
    if (e.event || plantData.filter(({date}) => date === e.dateStr)) {
      const start = e.dateStr || e.event.start
      const momentStart = moment(start).format('YYYY-MM-DD')
      const modalStart = moment(start).format("dddd, MMMM Do YYYY")

      const dayPlantData = plantData.filter(({date}) => date === momentStart)

      this.setState({ date: modalStart, dayPlantData })

      $('#exampleModalScrollable').modal();
    }
    else {
      this.setState({ date: null, dayPlantData: null })
      $('#exampleModalScrollable').modal();
    }
  }

  render() {
    const { plantData } = this.props

    return (
      <>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,list'
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          dateClick={this.handleDayClick}
          eventClick={this.handleDayClick}
          events={plantData}
        />

        <ModalDay
          date={this.state.date}
          dayPlantData={this.state.dayPlantData}
        />

      </>
    );
  }
}

export default MonthView;

// import MonthHeader from '../month-header/month-header.component'
// import MonthBody from '../month-body/month-body.component.jsx'

// import './month.styles.scss'

// class MonthView extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {}
//   }

//   render() {
//     return (
//       <div className='month'>
//         <MonthHeader />
//         <MonthBody plants={this.props.plantData} />
//       </div>
//     )
//   }
// }