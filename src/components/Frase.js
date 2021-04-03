import React from 'react';

const Frase = ({frase}) => {


    //how to make the white sqare where the prhase appears dont show up 
    //when there is no frases on the state an the button havent been picked yet 
    //without useEffect
    if(Object.keys(frase).length === 0) return null;

    return ( 
        <div className="phrase_container">
    <h1>{frase.quote}</h1>
    <p>- {frase.author}</p>
    </div>
     );
}
 
export default Frase;
