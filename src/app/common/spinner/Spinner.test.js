import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Spinner from './Spinner'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Spinner component', () => {
  test('renders', () => {
    const wrapper = shallow(<Spinner />)

    expect(wrapper.exists()).toBe(true)
  })
})
