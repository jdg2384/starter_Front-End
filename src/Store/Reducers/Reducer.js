import {
PROJECTINFO
} from '../Actions/types.js'; 

const INITIAL_STATE = {
  info:[],
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECTINFO: 
      return{ ...state, info: action.payload};
    default:
      return state;
  }
}; 
  
  
  
  
    
  