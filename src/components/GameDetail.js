import React from 'react'

//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Redux 
import {useSelector} from 'react-redux';

// React Router
import {useHistory} from 'react-router-dom'

import {smallImage} from '../util';

//IMAGES 
import playstation from "../img/playstation.svg";
import xbox from '../img/xbox.svg';
import Steam from '../img/steam.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

import starEmpty from '../img/star-empty.png';
import starfull from '../img/star-full.png'

// import playstation5 from '../img/PS5.svg';
// import xboxSeriesx from '../img/XboxSX.svg'

// import 


const GameDetail = ({pathId}) => {

    const history = useHistory();

    
    
    const exitDetailHandler = (e) =>{
        const element = e.target;

        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push("/")
        }
        // console.log(element);
    }

    //get stars 

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating)
        for(let i =1; i<=5; i++){
            if( i <= rating){
                stars.push(<img src={starfull} key={i} alt="Star-Rating" />)
            }
            else {
                stars.push(<img src={starEmpty} key={i} alt="Star-Rating" />)
            }

        }
        return stars;
    }
    
    //get platform images 

    const getPlatform = (platform) => {
        return (
            {  
                "PlayStation 4": playstation,
                "PlayStation 5": playstation,
                "Xbox Series S/X": xbox,
                "Xbox S" : xbox,
                "Xbox One" : xbox,
                "Ninetendo Switch" : nintendo,
                "PC": Steam,
                "iOS" : apple,
            }[platform] || gamepad
        );
    };

    //data
    const {screen, game, isLoading} = useSelector((state) => state.detail)
    
    return(
    <>
    {!isLoading && (
            <CardShadow className="shadow"  onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Raing: {game.rating}</p>
                            {getStars()}
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map((data) => (
                                    <img alt={data.platform.id} key={data.platform.id} src={getPlatform(data.platform.name)}></img>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image,1280)} alt={game.background_image}/>
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => ( 
                                <img key={smallImage(screen.image, 1280)} src={screen.image} alt={screen.image}/>  
                            ))}
                        </div>
                </Detail>
            </CardShadow>
        )}
    </>
    )

}

const CardShadow = styled(motion.div)` 
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background-color: white;
    }
`

const Detail = styled(motion.div)` 
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    z-index: 10;
    color: black;
    img{
        width: 100%;
    }

`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline-block;
    }

`

const Info = styled(motion.div)` 
    text-align: center;
`

const Platforms = styled(motion.div)` 
    display: flex; 
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }

`

const Media = styled(motion.div)` 
    margin-top: 5rem; 

    img{ 
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }

`

const Description = styled(motion.div)` 
    margin: 5rem 0rem;

`

export default GameDetail
