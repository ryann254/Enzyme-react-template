import React from 'react'
import {shallow} from 'enzyme'
import {checkProps, findByTestAttr} from '../../../utils'
import SharedButton from './index'

describe('Shared Button Component', () => {

    describe('Check propTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {}
            }

            const propsError = checkProps(SharedButton, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Renders', () => {

        let wrapper
        let mockFunc
        beforeEach(() => {
            mockFunc = jest.fn()
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...expectedProps} />)
        })

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })

        it('Should emit callback on click event', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent')
            button.simulate('click')
            const callback = mockFunc.mock.calls.length
            expect(callback).toBe(1)
        })
    })
})