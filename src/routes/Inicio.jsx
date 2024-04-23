import { Footer } from "../components/Footer";
export const Inicio = () => {
  return (
    <>
      <div className="content-main">
        <h2 className="title-main">
          ¡Bienvenidos a la biblioteca virtual de la UNR!
        </h2>
        <hr />
        <p className="text-main">
          En esta web encontraras los diversos libros de las carreras
          correspondientes...
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};
