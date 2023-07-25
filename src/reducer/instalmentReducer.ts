export enum SelectIndexActionTypes {
  SET_INDEX = "instalment/setIndex",
  RESET_INDEX = "instalment/resetIndex",
  INCREMENT = "instalment/increment",
  DECREMENT = "instalment/decrement",
}

export type SelectIndexReducerAction =
  | ResetIndexAction
  | SetIndexAction
  | UpdateIndexAction;
type SetIndexAction = ReturnType<typeof setIndex>;
type ResetIndexAction = ReturnType<typeof resetIndex>;
type UpdateIndexAction = ReturnType<typeof updateIndex>;

export const initialIndex = -1;
export const selectIndexReducer = (
  state: number,
  { type, payload }: SelectIndexReducerAction
) => {
  switch (type) {
    case SelectIndexActionTypes.SET_INDEX:
      return payload.index;

    case SelectIndexActionTypes.RESET_INDEX:
      return initialIndex;

    case SelectIndexActionTypes.INCREMENT: {
      const dataLength = payload.dataLength;
      return state === dataLength - 1 ? 0 : state + 1;
    }

    case SelectIndexActionTypes.DECREMENT: {
      const dataLength = payload.dataLength;
      return state === 0 ? dataLength - 1 : state - 1;
    }
  }
};

// following are action functions which will return actions including type and payload
export function setIndex(index: number) {
  return {
    type: SelectIndexActionTypes.SET_INDEX,
    payload: { index },
  } as const;
}

export function resetIndex() {
  return {
    type: SelectIndexActionTypes.RESET_INDEX,
    payload: undefined,
  } as const;
}

export function updateIndex(
  type: SelectIndexActionTypes.INCREMENT | SelectIndexActionTypes.DECREMENT,
  dataLength: number
) {
  return { type, payload: { dataLength } };
}
