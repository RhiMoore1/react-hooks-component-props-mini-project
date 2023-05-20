import React from "react";
import MinutesToRead from "./MinutesToRead";

// Make an Article component as a child of ArticleList. It should return:

// an <article> element, with the following elements inside:
// an <h3> element displaying the title of the article, passed as a prop called title
// a <small> element displaying the date of the article, passed as a prop called date
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop called preview


function Article({title, date, preview, minutes}) {
    console.log(title)
    return(
        <article>
            <h3>{title}</h3>
            {date ? (
                <small>{date}</small>
                ) : (
                <small>"January 1, 1970"</small>
                )}
            <p>{preview}</p>
            <MinutesToRead minutes={minutes}/>

           



            {/* <p>{minutes}</p> */}

            {/* {minutes < 30 ? <p>{minutes}☕️</p> : <p>{minutes}🍱</p>} */}


            {/* {if(minutes < 30) {
                return <p>{minutes}☕️</p>          
            }} */}


        </article>
    )
}

export default Article;