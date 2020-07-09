
// ACTION TYPES
const SET_MATCHINGBOXES_POINTS = "SET_MATCHINGBOXES_POINTS";
const SET_COLOR_POINTS = "SET_COLOR_POINTS";
const SET_SUDOKU_POINTS = "SET_SUDOKU_POINTS";
const SET_TRAFFICLIGHT_POINTS = "SET_TRAFFICLIGHT_POINTS";
const SET_PASSWORD_POINTS = "SET_PASSWORD_POINTS";
const SET_MEMORYGRID_POINTS = "SET_MEMORYGRID_POINTS";
const SET_MINFINDER_POINTS = "SET_MINFINDER_POINTS";
const SET_ALPHAREFLEX_POINTS = "SET_ALPHAREFLEX_POINTS";
const SET_TICTAC_POINTS ="SET_TICTAC_POINTS";
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
    case SET_PASSWORD_POINTS:
      return {
        ...state,
        Password : payload,
      };
    case SET_MEMORYGRID_POINTS:
       return {
        ...state,
        MemoryGrid : payload,
       };
    
    case SET_MINFINDER_POINTS:
        return {
        ...state,
        MinFinder : payload,
        };

    case SET_ALPHAREFLEX_POINTS:
        return {
        ...state,
        AlphaReflex : payload,
        };
      case SET_MATCHINGBOXES_POINTS:
          return {
              ...state,
              MatchingBoxes : payload,
          };
      case SET_TICTAC_POINTS:
          return {
              ...state,
              Tictac : payload,
          };

      case SET_SUDOKU_POINTS:
          return {
              ...state,
              Sudoku : payload,
          };

      case SET_TRAFFICLIGHT_POINTS:
          return {
              ...state,
              TrafficLight : payload,
          };
      case SET_COLOR_POINTS:
          return {
              ...state,
              Color : payload,
          };
    default:
      return state;
  }
}

// ACTION CREATORS
export const setPasswordPoints = (payload) => ({
  type: SET_PASSWORD_POINTS,
  payload,
});

export const setMemoryGridPoints = (payload) => ({
    type: SET_MEMORYGRID_POINTS,
    payload,
  });

  export const setMinFinderPoints = (payload) => ({
  type: SET_MINFINDER_POINTS,
  payload,
});
export const setAlphaReflexPoints = (payload) => ({
    type: SET_ALPHAREFLEX_POINTS,
    payload,
  });
export const setTicTacPoints = (payload) => ({
    type: SET_TICTAC_POINTS,
    payload,
});

export const setTrafficLightPoints = (payload) => ({
    type: SET_TRAFFICLIGHT_POINTS,
    payload,
});

export const setMatchingBoxesPoints = (payload) => ({
    type: SET_MATCHINGBOXES_POINTS,
    payload,
});
export const setColorPoints = (payload) => ({
    type: SET_COLOR_POINTS,
    payload,
});
export const setSudokuPoints = (payload) => ({
    type: SET_SUDOKU_POINTS,
    payload,
});