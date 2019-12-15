import React from 'react';

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import Calendar from './components/calendar/calendar.component'

import './App.css';

class App extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
    weekToggle: false
  }
 }

 handleWeekToggle = () => {
  this.setState({ weekToggle: !this.state.weekToggle })
 }

 render() {
    return (
      <div className="app-container">
        <Header />
        <Calendar {...this.state}/>
        <Footer />
      </div>
    );
  }
}

export default App;
