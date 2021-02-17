import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'
import {findByTestAttr} from '../../../utils/index'

const setup = (props={}) => {
    const component = shallow(<Header {...props}/>)
    return component;
}

describe('Header Component',  () => {

    let component;
    beforeEach(() => {
        component = setup()
    })
    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it('Should render without errors', () => {
        const logo = findByTestAttr(component, 'logoImg')
        expect(logo.length).toBe(1)
    })
})