import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import DialogView from './DialogView'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('DialogView component', () => {
  test('renders', () => {
    const wrapper = shallow(<DialogView maxWidth={'lg'} />)

    expect(wrapper.exists()).toBe(true)
  })
})
