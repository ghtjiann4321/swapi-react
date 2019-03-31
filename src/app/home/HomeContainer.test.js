import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import HomeContainer from './HomeContainer'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('HomeContainer component', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeContainer />)

    expect(wrapper.exists()).toBe(true)
  })
})
