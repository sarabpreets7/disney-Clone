export const add = (recommends,newDisneys,originals,trending) => {
    return{
        type:"SET_MOVIES",
        payload:{
            
            recommends :recommends,
            newDisneys : newDisneys,
            originals : originals,
            trending : trending,
        }
    }
}

