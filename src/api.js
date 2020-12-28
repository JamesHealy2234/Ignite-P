//Base URl 

const base_url = "https://api.rawg.io/api/";

// const popular_games = 'https://api.rawg.io/api/games?'


//popular Games

//variables to dynamically update --. Get Date 

const getCurrentMonth = () => {
    const month = new Date().getMonth();
    // console.log(month);
    if(month < 10){
        return `0${month}`
    }   else {
        return month;
    }
};

// still say .getDate()
const getCurrentDay = () => {
    const Day = new Date().getDate();
    if(Day < 10){
        return `0 ${Day}`
    }   else {
        return Day;
    }
};

// getCurrentMonth();

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

 // un rearranged version 

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

console.log(nextYear);

//order games by rating 
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`

//Game Screen shots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`


export const searchGamesURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9`


// console.log(upcomingGamesUrl())
// console.log(popularGamesUrl())
// console.log(newGamesUrl())
