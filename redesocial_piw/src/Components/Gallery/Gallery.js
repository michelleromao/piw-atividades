import React, { useState } from "react";
import "./Gallery.css";
import Post from "../Post/Post";

function Gallery() {
  let [state, setState] = useState([]);
  state = {
    post: [
      {
        id: 1,
        name: "Joao",
        message:
          "Mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem.",
        qtdLikes: 1,
      },
      {
        id: 2,
        name: "Tiago",
        message:
          "Mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem.",
        qtdLikes: 3,
      },
      {
        id: 3,
        name: "Camila",
        message:
          "Mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem mensagem.",
        qtdLikes: 2,
      },
    ],
  };

  let getIdPost = (ids) => {
    console.log(`ID Post: ${ids}`);

    state.post.map((posts) => {
      if (posts.id === ids) {
        setState({
          posts: [posts.qtdLikes, (posts.qtdLikes += 1)],
        });
      }
    });
  };

  let getClick = (qtdLikes) => {
    console.log(`Received ${qtdLikes + 1} like(s)`);
    console.log(` ************ `);
  };

  return (
    <div className="body">
      {state.post.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          message={post.message}
          qtdLikes={post.qtdLikes}
          getId={getIdPost}
          wasClicked={getClick}
        ></Post>
      ))}
    </div>
  );
}

export default Gallery;
