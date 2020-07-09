
// ACTION TYPES
const SET_ATTENTION_POINTS = "SET_ATTENTION_POINTS";
const SET_MEMORY_POINTS = "SET_MEMORY_POINTS";
const SET_LOGIC_POINTS = "SET_LOGIC_POINTS";
const SET_SPEED_POINTS = "SET_SPEED_POINTS";


// SELECTORS
export const MODULE_NAME = "points";

// REDUCER
const initialState = {
    Password:0,
    Color:0,
    TrafficLight:0,
    MemoryGrid:0,
    Tictac:0,
    MatchingBoxes:0,
    MinFinder:0,
    AlphaReflex:0,
    Sudoku:0
};

export function pointsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ATTENTION_POINTS:
      return {
        ...state,
        attention : payload,
      };
    case SET_MEMORY_POINTS:
       return {
        ...state,
        memory : payload,
       };
    
    case SET_LOGIC_POINTS:
        return {
        ...state,
        logic : payload,
        };

    case SET_SPEED_POINTS:
        return {
        ...state,
        speed : payload,
        };
    default:
      return state;
  }
}

// ACTION CREATORS
export const setAttentionPoints = (payload) => ({
  type: SET_ATTENTION_POINTS,
  payload,
});

export const setMemoryPoints = (payload) => ({
    type: SET_MEMORY_POINTS,
    payload,
  });

  export const setLogicPoints = (payload) => ({
  type: SET_LOGIC_POINTS,
  payload,
});
export const setSpeedPoints = (payload) => ({
    type: SET_SPEED_POINTS,
    payload,
  });
    