import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGamesURL} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL())
  dispatch({
    type: "FETCH_GAMES",
    payload: {
        // must contain a .. results
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};


export const fetchSeached = (game_name) => async (dispatch) => {
  //Fetch searched data
  
  //create variable for axios await 
  const searchedData = await axios.get(searchGamesURL(game_name))

  dispatch({
    type: "FETCH_SEARCHED",
    payload:{
      searched:  searchedData.data.results,
    }
  })


}
