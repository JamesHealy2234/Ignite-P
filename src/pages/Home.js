import React, {useEffect} from "react";
//Redux
import {useDispatch, useSelector} from "react-redux";
import { loadGames} from '../actions/gamesAction';
//components
import Game from '../components/Game';

import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';

import GameDetail from '../components/GameDetail';

import {useLocation} from 'react-router-dom';


const Home = () => {
 // debugger;

const location = useLocation();
console.log(location);

const pathId = location.pathname.split("/")[2];
console.log(pathId)

//  const path = location.pathname.split("/")[2];
//  console.log(path);

  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch]);

    //get that data back from the state
    const {popular, newGames, upcoming} = useSelector((state) => state.games);
    
    // console.log(upcoming);

    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
            {/*toggle */}
                <AnimatePresence> {pathId && <GameDetail pathId={pathId}/>} </AnimatePresence>
                <h2>Upcoming Games</h2>
                <Games>
                    
                    {upcoming.map(game => (
                        <Game 
                            name={game.name} 
                            released ={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}   
                        />
                    ))}
                </Games>

                
                {/*rest of the games */}

                <h2>New Games</h2>
                <Games>      
                    {newGames.map(game => (
                        <Game 
                            name={game.name} 
                            released ={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}   
                        />
                    ))}
                </Games>

                <h2>Popular Games</h2>
                <Games>   
                    {popular.map(game => (
                        <Game 
                            name={game.name} 
                            released ={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}   
                        />
                    ))}
                </Games>

            </AnimateSharedLayout>
        </GameList>
    )
};



const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem
    }

`

const Games =styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;

`

export default Home
