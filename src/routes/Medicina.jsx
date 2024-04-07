import { librosMedicina } from "../hooks/librosmedicina";
import { Footer } from "../components/Footer";
export const Medicina = () => {
  return (
    <>
      <h2 className="title">LIBROS DE MEDICINA</h2>
      <hr />
      <div className="card-list">
        {librosMedicina.libros.map((libro) => (
          <div className="card-a" key={libro.id}>
            <h5 className="title-card">{libro.titulo}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {libro.autor}
            </h6>
            <p className="card-text">{libro.descripcion}</p>
            <a href={libro.url_pdf} className="card-link">
              Enlace al PDF
            </a>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};
