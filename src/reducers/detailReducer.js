

//another property is loading
const initalState = {game: {platforms: [] }, screen: {results: []}, isLoading: true};

// add empty object 
//arrow function
const detailReducer = (state=initalState, action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return{
                ...state,
                isLoading: true,

            };

        default:
            return {...state}

    }
}

export default detailReducer