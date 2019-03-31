import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Search from './'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Search component', () => {
  test('renders', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper.exists()).toBe(true)
  })
})
