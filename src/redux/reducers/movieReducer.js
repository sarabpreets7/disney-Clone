import initialState from "../reducers/initialState.json"

const movieReducer = (state=initialState,action) =>{
    switch(action.type){
        case "SET_MOVIES" : 
            return {...state,
                        recommends:action.payload.recommends,
                        newDisneys:action.payload.newDisneys,
                        originals:action.payload.originals,
                        trending:action.payload.trending
            }
        
        default : return state
    }
}

export default movieReducer;