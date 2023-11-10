import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

let stateCopy

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            stateCopy = [...state]
            if(action.payload === 'up')
            {
            state.sort((a, b) => {
                if (a.name > b.name) {return 1}
                if (a.name < b.name) {return -1}
                return 0;
            })}
            else if(action.payload === 'down')
            {
                stateCopy.reverse()
            }
            return stateCopy
        }
        case 'check': {
            stateCopy = state.filter( (stud) => stud.age >= 18 )
            stateCopy.sort((a, b) => {
                if (a.age > b.age) {return 1}
                if (a.age < b.age) {return -1}
                return 0;
            })
            return stateCopy // need to fix
        }
        default:
            return state
    }
}
