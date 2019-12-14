import React from 'react';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import './month.styles.scss'

class MonthView extends React.Component {
  handleDateClick = (e) => {
    console.log('EVENT: ', e)
  }

  render() {
    const { plantData } = this.props

    return (
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,list'
        }}
        dateClick={this.handleDateClick}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={plantData}
      />
    );
  }
}

export default MonthView;