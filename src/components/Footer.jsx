import Logo from "../assets/Logo.png"

export const Footer = () => {
  return (
    <div className="container-end-main">
      <p> © 2024. Términos y Condiciones.</p>
      <a href="https://www.instagram.com"><img src={Logo}alt="logo"></img></a>
    </div>
  );
};
