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
    case "instalment/setIndex":
      return payload;

    case "instalment/resetIndex":
      return initialIndex;

    case "instalment/increment": {
      const dataLength: number = payload.dataLength;
      return state === dataLength - 1 ? 0 : state + 1;
    }

    case "instalment/decrement": {
      const dataLength: number = payload.dataLength;
      return state === 0 ? dataLength - 1 : state - 1;
    }
  }
};

// following are action functions which will return actions including type and payload
export function setIndex(index: number) {
  return {
    type: "instalment/setIndex",
    payload: index,
  } as const;
}

export function resetIndex() {
  return {
    type: "instalment/resetIndex",
    payload: undefined,
  } as const;
}

export function updateIndex(
  type: "instalment/increment" | "instalment/decrement",
  dataLength: number
) {
  return { type, payload: { dataLength } };
}
