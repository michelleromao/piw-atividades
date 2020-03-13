import React from "react";
import "./Gallery.css";
import Post from "../Post/Post";

class Gallery extends React.Component {
  state = {
    post: [
      {
        name: "michelle",
        content:
          "Que rede social legal! Várias pessoas publicam receitas aqui né? Ainda estou aprendendo, ainda fico no arroz com ovo kkkkkk"
      },
      {
        name: "lara",
        content:
          "GUACAMOLE. 4 avocados maduros; 1 tomate maduro; caldo de 1 limão; 2 colheres (sopa) de azeite; coentro picado a gosto; sal e pimenta-do-reino moída na hora a gosto. Lave e seque os avocados, o tomate e o coentro. Com a faca, corte o avocado ao meio, no sentido do comprimento, e descarte o caroço. Descasque, corte cada metade em cubos e transfira para uma tigela. Regue o avocado com o caldo de limão e amasse com um garfo até formar um purê rústico. Corte o tomate ao meio, descarte as sementes, e corte as metades em cubos pequenos. Pique grosseiramente as folhas de coentro. Junte ao avocado amassado, tempere com o azeite, sal e pimenta a gosto. Misture bem e sirva imediatamente."
      }
    ]
  };

  render() {
    return (
      <div className="body">
        <div className="bodyGallery">
          {this.state.post.map(post => (
            <Post name={post.name} content={post.content}></Post>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
