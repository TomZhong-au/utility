export type SelectIndexReducerAction = ResetIndex | SetIndex | UpdateIndex;
type SetIndex = ReturnType<typeof setIndex>;
type ResetIndex = ReturnType<typeof resetIndex>;
type UpdateIndex = ReturnType<typeof updateIndex>;


export const initialIndex = -1;
export const selectIndexReducer = (
  state: number,
  { type, payload }: SelectIndexReducerAction
) => {
  switch (type) {
    case "setIndex":
      return payload;

    case "resetIndex":
      return initialIndex;

    case "increment": {
      const dataLength: number = payload.dataLength;
      return state === dataLength - 1 ? 0 : state + 1;
    }

    case "decrement": {
      const dataLength: number = payload.dataLength;
      return state === 0 ? dataLength - 1 : state - 1;
    }
  }
};

// following are action functions which will return actions including type and payload
export function setIndex(index: number) {
  return {
    type: "setIndex",
    payload: index,
  } as const;
}

export function resetIndex() {
  return {
    type: "resetIndex",
    payload: undefined,
  } as const;
}

export function updateIndex(
  type: "increment" | "decrement",
  dataLength: number
) {
  return { type, payload: { dataLength } };
}
