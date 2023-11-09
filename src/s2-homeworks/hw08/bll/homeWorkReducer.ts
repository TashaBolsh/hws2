import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'down'){
                state.reverse()
            }
            if(action.payload === 'up'){
            state.sort((a, b) => {
                if (a.name > b.name) {return 1}
                if (a.name < b.name) {return -1}
                return 0;
            })}
            return state
        }
        case 'check': {
            state = state.filter( (stud) => stud.age >= 18 )
            state.sort((a, b) => {
                if (a.age > b.age) {return 1}
                if (a.age < b.age) {return -1}
                return 0;})
            return state // need to fix
        }
        default:
            return state
    }
}
