import "./App.css";
import ImagePrincipal from "/principal.svg";
import Icons from "./components/Icons.jsx";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <div class="container">
        <section class="portada">
          <div className="text-portada">
            <h1>Nombre de la empresa</h1>
            <p>Nombre y logo</p>
            <div class="btn-portada">Sing-Up</div>
          </div>
          <div>
            <img class="img-portada" src={ImagePrincipal} />
          </div>
        </section>

        <aside class="aside">
          <h2>¡Bienvenido a pagina de PQRS!.</h2>
          <p className="inicio">Iniciar seccion :D</p>
          <form>
            <div>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                name="username"
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <button type="submit">Iniciar sesión</button>
            <div>
              <p>
                ¿No tienes cuenta? <a href="#">Registrate</a>
              </p>
            </div>
            <div>
              <p>
                ¿Olvidaste tu contraseña? <a href="#">Recuperar contraseña</a>
              </p>
            </div>
            <div>
              <p>
                ¿Tienes dudas? <a href="#">Contáctanos</a>
              </p>
            </div>
            <p>Iniciar sesión con:</p>
            <div className="icons">
              <Icons img={<FaFacebook />} name={"Facebook"} />
              <Icons img={<FaInstagram />} name={"Instagram"} />
              <Icons img={<FaLinkedin />} name={"Linkendin"} />
              <Icons img={<FaGithub />} name={"GitHub"} />
            </div>
          </form>
        </aside>
      </div>
    </>
  );
}

export default App;
