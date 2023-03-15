import React from "react";

function emojiMaker(minutes){
    if(minutes >= 30){
        return "☕️"

    }else{
       let coffee =  Math.ceil(minutes/5)
       console.log(coffee)
       let cofEmoji = "";
       for(let i = 0; i < coffee; i++){

        cofEmoji = cofEmoji + "☕️"

       }
       console.log(cofEmoji)
       return cofEmoji;
    }
}


const Article = ({title, date="January 1, 1970", preview, minutes }) => {

    const emoji = emojiMaker(minutes)
    


    return(
        <article>
            <h3>{title}</h3>
            <small>{date} {emoji}{minutes} read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article