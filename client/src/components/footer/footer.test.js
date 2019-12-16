import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './footer.component'
import { isTSAnyKeyword } from '@babel/types'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it('Renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer></Footer>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Renders footer correctly', () => {
  const { getByTestId } = render(<Footer />)
  expect(getByTestId('footer')).toHaveTextContent('Technology Used: Node.js(v10.16.0), React(v16.12.0), jQuery, Express, MongoDB/Mongoose, mLab, Heroku')
})
