export const initialState = {
    progress: 0,
    wrongIndex: -1,
    boardSize: 4,
    gameWin: false,
    // the value of th eresetGame boolean is not important, it is used to trigger the board reset
    resetGame: false,
}

// the problem is when the user changes board size, the reducer is not aware of it.
// the boardSize should be pass from outside as props.
// 

type NumberGameState = typeof initialState

export default function numberGameReducer(state: NumberGameState, { type, payload }: ReducerAction) {
    switch (type) {
        case ActionType.CLICK:
            const currentProgress = state.progress
            if (payload === currentProgress + 1) {
                return {
                    ...state,
                    progress: payload
                }
            } else {
                return state
            }

        case ActionType.RESET:
            return {
                ...initialState,
                resetGame: !state.resetGame
            }

        default:
            return state
    }

}

export enum ActionType {
    CLICK = 'click',
    RESET = 'reset'
}

interface ReducerAction {
    type: ActionType;
    payload?: number
}