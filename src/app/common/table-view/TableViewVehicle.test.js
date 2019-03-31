import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import TableViewVehicle from './TableViewVehicle'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('TableViewVehicle component', () => {
  test('renders', () => {
    const wrapper = shallow(<TableViewVehicle />)

    expect(wrapper.exists()).toBe(true)
  })
})
