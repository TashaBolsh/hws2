import React from 'react'
import { homeWorkReducer } from '../homeWorkReducer'
import { UserType } from '../../HW8'

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Алданов Антон', age: 16},
        {_id: 1, name: 'Бориславов Макс', age: 23},
        {_id: 2, name: 'Тимошен Роман', age: 19},
        {_id: 3, name: 'Макаров Михаил', age: 54},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'sort',
        payload: 'up',
    })

    expect(newState[0]._id).toBe(1)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'sort',
        payload: 'down',
    })

    expect(newState[0]._id).toBe(0)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'check',
        payload: 18,
    })

    expect(newState.length).toBe(4)
})
