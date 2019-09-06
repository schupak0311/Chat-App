import { combineReducers } from "redux";

import { fetchMessages } from "../routines/routines";

// import {
//   GET_MESSAGES,
//   MESSAGES_LOADED,
//   ADD_MESSAGE,
//   EDIT_MESSAGE,
//   DELETE_MESSAGE,
//   SUBMIT_NEW_MESSAGE,
//   START_EDITING,
//   CANCEL_EDITING
// } from "../actions/types";

const initialState = {
  messages: [],
  loading: false,
  error: null
};

export const getNewMessageId = messages =>
  (Math.max(...messages.map(message => message.id)) + 1).toString();

const messageData = (state = initialState, action) => {
  switch (action.type) {
    case fetchMessages.TRIGGER:
      return {
        ...state,
        loading: true
      };
    case fetchMessages.SUCCESS:
      return {
        ...state,
        messages: action.payload,
        loading:false
      };
    case fetchMessages.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    // case ADD_MESSAGE:
    //   return {
    //     ...state,
    //     messages: [
    //       ...state.messages,
    //       {
    //         id: getNewMessageId(state.messages),
    //         user: action.user,
    //         avatar: action.avatar,
    //         created_at: new Date().toLocaleString(),
    //         message: action.text
    //       }
    //     ]
    //   };
    // case DELETE_MESSAGE:
    //   return {
    //     ...state,
    //     messages: [
    //       ...state.messages.filter((item, id) => id !== action.messageId)
    //     ]
    //   };
    // case START_EDITING:
    //   return {
    //     ...state,
    //     isEditing: true,
    //     initialCommentMessage: action.initialCommentMessage,
    //     editedMessageId: action.messageId
    //   };
    // case CANCEL_EDITING:
    //   return {
    //     ...state,
    //     isEditing: false
    //   };
    // case EDIT_MESSAGE:
    //   return {
    //     ...state,
    //     editedCommentMessage: action.editedMessage
    //   };
    // case SUBMIT_NEW_MESSAGE:
    //   return {
    //     ...state,
    //     messages: [...state.messages].map((item, id) => {
    //       if (id === state.editedMessageId) {
    //         item.message = state.editedCommentMessage;
    //         return item;
    //       }
    //       return item;
    //     }),
    //     isEditing: false
    //   };
    default:
      return state;
  }
};

// const isLoading = (state = true, action) => {
//   if (action.type === MESSAGES_LOADED) {
//     return false;
//   } else {
//     return state;
//   }
// };

export default messageData;
