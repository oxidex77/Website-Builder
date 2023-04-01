import ActionTypes from "../constants/ActionTypes";

const initialState = {
  activeTab: 0,
  previewMode: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.index,
      };
    case ActionTypes.CHANGE_PREVIEW_MODE:
      return {
        ...state,
        previewMode: action.mode,
      };
    default:
      return state;
      
  }
}
