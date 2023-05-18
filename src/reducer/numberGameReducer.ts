export const initialState = {
    progress: 0,
    error: false,
    gameWin: false,
    // the value of the resetGame boolean is not important, it is used to trigger the board reset
    resetGame: false,
}



type NumberGameState = typeof initialState

export default function numberGameReducer(state: NumberGameState, { type, payload }: ReducerAction) {
    switch (type) {
        case ActionType.CLICK:
            const currentProgress = state.progress
            const { id, boardSize } = payload
            if (id === currentProgress + 1) {
                return {
                    ...state,
                    progress: id,
                    gameWin: id === boardSize * boardSize,
                    error: false,
                }
            }
            // these buttons are already pressed, do nothing by returning the state
            if (id <= currentProgress) return state

            return {
                ...state,
                error: true
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

type ReducerAction = ClickAction | ResetAction

interface ClickAction {
    type: ActionType.CLICK,
    payload: {
        id: number,
        boardSize: number
    }
}

interface ResetAction {
    type: ActionType.RESET,
    payload?: undefined
}