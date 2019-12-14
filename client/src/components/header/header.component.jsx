import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
  <div className="header">
    <h1 className='title'>Tandem Growth</h1>
    <h3 className='subtitle'>Developer: <a href='https://shanestreator.github.io/' target='_blank'>Shane Streator</a></h3>
  </div>
)

export default Header