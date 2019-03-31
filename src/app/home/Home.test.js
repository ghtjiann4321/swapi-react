import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Home from './Home'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Home component', () => {
  test('renders', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.exists()).toBe(true)
  })
})
