export const ACTION_TYPES = {
  SET_OPEN_DISPATCH_DRAWER: 'dispatch/SET_OPEN_DISPATCH_DRAWER',
};

const initialState = {
  openDispatchDrawer: true,
};

export type DispatchState = Readonly<typeof initialState>;

export default (state: DispatchState = initialState, action): DispatchState => {
  switch (action.type) {
    case ACTION_TYPES.SET_OPEN_DISPATCH_DRAWER: {
      return {
        ...state,
        openDispatchDrawer: action.payload
      };
    }
    default:
      return state;
  }
}

export const setOpenDispatchDrawer = (value) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_OPEN_DISPATCH_DRAWER,
    payload: value
  });
};