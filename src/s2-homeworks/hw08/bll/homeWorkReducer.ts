import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            state.sort((a, b) => {
                if (a.name > b.name) {return 1}
                if (a.name < b.name) {return -1}
                return 0;
            })
            if(action.payload === 'down'){
                state.reverse()
            }
            return state
        }
        case 'check': {
            state = state.filter( (stud) => stud.age >= 18 )
            return state // need to fix
        }
        default:
            return state
    }
}
