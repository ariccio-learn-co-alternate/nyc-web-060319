import { combineReducers } from 'redux';

const defaultState = {
 dogs: [],
 squirrels: [],
 dogLikes: 0,
 squirrelLikes: 0
};

function dogReducer(state = defaultState.dogLikes, action) {
 console.log('state', state);
 switch (action.type) {
  case 'LIKE_DOG':
   return state + 1;
  default:
   return state;
 }
}

function fetchReducer(state = defaultState, action) {
 switch (action.type) {
  case 'FETCH_ANIMALS':
   return {
    dogs: action.payload.dogs,
    squirrels: action.payload.squirrels
   };
  default:
   return state;
 }
}

function squirrelReducer(state = defaultState.squirrelLikes, action) {
  switch (action.type) {
   case 'LIKE_SQUIRREL':
    return state + 1;
   default:
    return state;
  }
 }
 

const rootReducer = combineReducers({
 dogLikes: dogReducer,
  squirrelLikes: squirrelReducer,
 animals: fetchReducer
});

export default rootReducer;
