import React from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr} from '../../../utils/index'
import Headline from './index'

const setup = (props={}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}

describe('Headline Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            } 
            wrapper = setup(props)
            })

            it('Should render Headline Component', () => {
                const component = findByTestAttr(wrapper, 'HeadlineComponent')
                expect(component.length).toBe(1)
            })

            it('Should render Header Component', () => {
                const component = findByTestAttr(wrapper, 'header')
                expect(component.length).toBe(1)
            })

            it('Should render Desc Component', () => {
                const component = findByTestAttr(wrapper, 'desc')
                expect(component.length).toBe(1)
            })
    })

    describe('Have No props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup()
        })

        it('Should Not render Headline Component', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })
    })
})
