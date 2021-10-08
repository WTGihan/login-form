import * as loginActions from "../constants/login";

export default function reducer(
  state = [],
  action: { type: string; payload: { username: string; password: string } }
): any {
  if (action.type === loginActions.SET_USERNAME)
    if (state === [])
      return [
        ...state,
        {
          username: action.payload.username,
        },
      ];
    else return { ...state, username: action.payload.username };
  if (action.type === loginActions.SET_PASSWORD)
    if (state === [])
      return [
        ...state,
        {
          password: action.payload.password,
        },
      ];
    else return { ...state, password: action.payload.password };
  return state;
}
