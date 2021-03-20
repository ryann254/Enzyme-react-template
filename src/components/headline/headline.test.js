import React from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr, checkProps} from '../../../utils/index'
import Headline from './index'

const setup = (props={}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}

describe('Headline Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@gmail.com',
                    profession: 'Test Profession',
                    age: 15,
                    onlineStatus: false
                }]
            }

            const propsError = checkProps(Headline, expectProps)
            expect(propsError).toBeUndefined()
        })
    })

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
