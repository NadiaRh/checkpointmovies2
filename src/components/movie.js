import React from 'react';
import darkKnight from '../assets/darkknight.jpg';
import invisibleman from '../assets/invisibleman.jpg';
import twilight from '../assets/twilight.jpg';
import joker from '../assets/joker.jpg';
import avatar from '../assets/avatar.jpg';
import casadepapel from '../assets/casadepapel.jpg';
import saw from '../assets/saw.jpg';
import thesonic from '../assets/thesonic.jpg';
import dark from '../assets/dark.jpg';

 
const Movie = (props) => {
    let image="";
    
    switch(props.name) {
        case "Dark Knight" :
            image=darkKnight;
            break;
            case "The invisible man" :
            image=invisibleman;
            break;
            case "Twilight Saga" :
            image=twilight;
            break;
            case "Joker" :
                image=joker;
                break;
                case "Avatar" :
                    image=avatar;
                    break;
                    case "Casa de papel" : 
                    image=casadepapel;
                    break;
                    case "Saw":
                        image=saw;
                        break;
                        case"The sonic" :
                        image=thesonic;
                        break;
                        case"Dark":
                        image=dark;
                        break;
            default:
                image=""
    }
    let cover = {
        backgroundImage:'url(' +image +')'
    }
return (
<div className="movie-container">
       <div className="movie-image" style={cover}> </div>
       <p className="movie-title">{props.name} </p>
       <p className="movie-year"> {props.year} </p>
       
     </div>





);
}
export default Movie;