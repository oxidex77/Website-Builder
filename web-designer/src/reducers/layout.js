import ActionTypes from "../constants/ActionTypes";
import blocks from "../views/blocks/";
import {v4 as uuidv4} from 'uuid';

const initialState = {
  blocks: [],
  selectedBlockUuid: '',
  documentId: 'document1'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PUSH_BLOCK:
      return {
        ...state,
        blocks: [...state.blocks, {
          uuid: uuidv4(),
          blockId: action.blockId,
          data: {
            ...blocks[action.blockId].defaultData
          }
        }]
      }
    case ActionTypes.SET_SELECTED_BLOCK:
      return {
        ...state,
        selectedBlockUuid: action.blockUuid
      }
    case ActionTypes.REORDER_LAYOUT:
      return {
        ...state,
        blocks: [
          ...action.newBlocksLayout
        ]
      }
    case ActionTypes.CHANGE_BLOCK_DATA:
      const index = state.blocks.findIndex(el => {
        return el.uuid === action.blockUuid;
      });
      const newBlocks = [...state.blocks];
      newBlocks[index].data[action.key] = action.value;
      return {
        ...state,
        blocks: [...newBlocks]
      }
    case ActionTypes.DELETE_BLOCK:
      const newArr = state.blocks.filter(block => {
        return block.uuid !== action.blockUuid;
      });
      return {
        ...state,
        blocks: [...newArr],
        selectedBlockUuid: ''
      }
    case ActionTypes.CHANGE_DOCUMENT_ID:
      return {
        ...state,
        documentId: action.documentId
      }
    default:
      return state;
  }
}
