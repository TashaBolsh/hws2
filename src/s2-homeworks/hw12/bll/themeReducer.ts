const initState = {
    themeId: 1,
}
type ActionType=  {
    type: 'SET_THEME_ID'
    id:number
}

export const themeReducer = (state = initState, action:ActionType): {themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {themeId:action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => (
    { type: 'SET_THEME_ID', id:id }
) // fix any
