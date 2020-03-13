import React from "react";
import "./Gallery.css";
import Post from "../Post/Post";

class Gallery extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="bodyGallery">
          <Post
            name="Michelle"
            content="Que rede social legal! Várias pessoas publicam receitas aqui né? Ainda estou aprendendo, ainda fico no arroz com ovo kkkkkk"
          ></Post>
          <Post
            name="Amanda"
            content="GUACAMOLE. 4 avocados maduros
            1 tomate maduro
            caldo de 1 limão
            2 colheres (sopa) de azeite
            coentro picado a gosto
            sal e pimenta-do-reino moída na hora a gosto. Lave e seque os avocados, o tomate e o coentro. Com a faca, corte o avocado ao meio, no sentido do comprimento, e descarte o caroço. Descasque, corte cada metade em cubos e transfira para uma tigela.
            Regue o avocado com o caldo de limão e amasse com um garfo até formar um purê rústico.
            Corte o tomate ao meio, descarte as sementes, e corte as metades em cubos pequenos. Pique grosseiramente as folhas de coentro. Junte ao avocado amassado, tempere com o azeite, sal e pimenta a gosto. Misture bem e sirva imediatamente."
          ></Post>
          <Post
            name="Lara"
            content="600g de filé de peito Seara DaGranja, cortado em cubos
            Sal e pimenta do reino a gosto
            1 colher (sopa) de óleo 
            1 colher (sopa) de azeite extra virgem
            ½ cebola picada
            6 colheres (sopa) de ketchup 
            2 colheres (sopa) de molho inglês 
            1 xícara (chá) de champignon cortado ao meio ou em fatias
            300g de coalhada seca light
            ½ xícara (chá) de leite desnatado
            Sal e pimenta do reino a gosto
            MODO DE PREPARO
            Tempere os cubos de filé de peito com sal e pimenta do reino a gosto.
            Aqueça uma panela com o óleo e, em fogo alto, doure os cubos de frango (coloque pequenas porções na panela e evite mexer ao máximo para que não junte água).
            Retire o frango da panela e reserve em um recipiente.
            Na mesma panela que dourou o frango, acrescente um fio de azeite e refogue a cebola picada.
            Volte o frango dourado para a panela e coloque o ketchup, o molho inglês e o champignon e mexa mais um pouco.
            Por último, coloque a coalhada seca e o leite e ajuste o tempero com sal e pimenta do reino.
            Deixe cozinhar em fogo baixo por 20 minutos.
            Sirva com o arroz de sua preferência e batata palha."
          ></Post>
        </div>
      </div>
    );
  }
}

export default Gallery;
