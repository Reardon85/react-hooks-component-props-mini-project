import React from "react";
import Article from "./Article";

const ArticleList = ({posts}) => {

    const postArray = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    })

    return(
        <main>
            {postArray}

        </main>
    )
}

export default ArticleList