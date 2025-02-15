import React from "react";
import Article from "./Article";
import MinutesToRead from "./MinutesToRead";

// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop called post to ArticleList)
// make sure to assign a unique key prop to each Article


function ArticleList({posts}) {
  console.log(posts)
  return (
    <div>
      <main>
      {posts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
          />
        ))}
      </main>
    </div>
  );
}

export default ArticleList;
