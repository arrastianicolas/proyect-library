import ig from "../assets/ig.png";
export const Footer = () => {
  return (
    <div className="container-end-main">
      <p>© 2024. Términos y Condiciones.</p>
      <a href="">
        <img src={ig} alt="instagram" className="img-footer" />
      </a>
    </div>
  );
};
