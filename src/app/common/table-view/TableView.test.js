import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import TableView from './TableView'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('TableView component', () => {
  test('renders', () => {
    const wrapper = shallow(<TableView />)

    expect(wrapper.exists()).toBe(true)
  })
})
