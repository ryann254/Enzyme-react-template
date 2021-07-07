import React from 'react'
import { shallow } from 'enzyme'
import {checkProps, findByTestAttr} from '../../../utils'
import ListItem from './index'

describe('ListItem Component', () => {

    describe('Checking propTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Test Title',
                desc: 'Example Test Description'
            }

            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Component renders', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Test Title',
                desc: 'Example Test Description'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it('Should render List Item without errors', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1)
        })

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle')
            expect(title.length).toBe(1)
        })

        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc')
            expect(desc.length).toBe(1)
        })
    })

    describe('Component should NOT render', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Example Test Description'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it('Should NOT render', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(0)
        })
    })
    
})