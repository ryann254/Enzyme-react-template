import moxios from 'moxios'
import {testStore} from '../../utils'
import {fetchPosts} from '@actions/index'

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('Store is updated successfully', () => {
        const expectedState = [{
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
    ]
    const store = testStore()
    moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
            status: 200,
            response: expectedState
        })

        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState()
            expect(newState.posts).toBe(expectedState)
        })
    })

    })
})
