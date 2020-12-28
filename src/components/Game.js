import React from 'react'

//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailActions';
import {Link} from 'react-router-dom'

import {smallImage} from '../util';

const Game = ({name, released, image, id}) => {

const stringPathId = id.toString();
//load details
const dispatch = useDispatch();

const loadDetailHandler =() => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id))
}



    return(
        //wrap around the whole game tag
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}> 
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>
            </Link>
        </StyledGame>

    )

}

const StyledGame = styled(motion.div)` 
    //first thing 
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%; 
        //new height
        height: 40vh;
        object-fit: cover;
    }

`

export default Game

