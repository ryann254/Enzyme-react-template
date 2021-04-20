import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import {findByTestAttr, testStore} from '../utils'

const setUp = (initialState={}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store}/>).childAt(0).dive()
    return wrapper
}

describe('App Component', () => {
    let wrapper
    beforeEach(() => {
        const initialState =  {
            posts: [{
            title: 'Sample Title',
            body: 'Sample Body'
        },
        {
            title: 'Sample Title',
            body: 'Sample Body'
        },
        {
            title: 'Sample Title',
            body: 'Sample Body'
        },
    ]}

    wrapper = setUp(initialState) 
    })

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent')
        expect(component.length).toBe(1)
    })

    it('updateState should update the state when after posts are fetched', () => {
        const classInstance = wrapper.instance()
        classInstance.updateState()
        const hideBtn = classInstance.state.hideBtn
        expect(hideBtn).toBe(true)
    })

    it('returnsAValue should return a value when its called', () => {
        const classInstance = wrapper.instance()
        const newValue = classInstance.returnsAValue(5)
        expect(newValue).toBe(6)
    })

})
