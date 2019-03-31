import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Search from './Search'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Search component', () => {
  test('renders', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper.exists()).toBe(true)
  })

  test('user text is echoed', () => {
    const wrapper = shallow(<Search />)

    wrapper.find('SearchInput').simulate('change', {
      target: { value: 'Ana' }
    })
    expect(wrapper.find("input").props().value).toEqual("hello");
  })
})
