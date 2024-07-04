const Home = () => {
  return (
    <article
      className="d-flex flex-column justify-content-md-start align-items-xl-center home pb-2 rounded-2 section pt-0"
      id="sobremi"
    >
      <div className="d-flex justify-content-center pb-md-3 w-100 mb-5 gap-5">
        <div className="rounded-5 border-1 d-flex align-items-center gap-2">
          <i class="bi bi-brightness-high fs-2 text-dark "></i>
          <span>Luz</span>
        </div>
        <div className="rounded-5 border-1 d-flex align-items-center gap-2">
          <i class="bi bi-globe fs-2 text-dark"></i>
          <span>Español</span>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-xl-4 flex-md-row home_presentation">
        <div className="text-center">
          <p className="text-dark lead mb-1">¡Bienvenido! 👋</p>
          <h1 className=" mb-2 mb-xl-4 display-3 fw-bold">
            Hola, soy Bruno Madozzo
          </h1>
          <h2 className="display-6 fw-bold mb-3 mb-xl-5">
            Desarrollador Web Frontend
          </h2>
          <div className="descriptionHome  p-3 p-xl-5 rounded-4 mb-4 mb-xl-5">
            <p className="fs-5 text-dark  mx-2 mx-xl-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iusto
              provident ratione dolore libero vitae nam, assumenda asperiores
              optio molestias animi eligendi cupiditate natus accusantium.
              Fugiat suscipit veritatis et debitis.
            </p>
          </div>

          <div className="d-flex flex-column gap-3 gap-xl-4 justify-content-center align-items-center">
            <button className="btn px-5 rounded-0 fw-bold btnCV fs-5">
              Descargar CV <i className="bi bi-download ms-2"></i>
            </button>
            <div className="d-flex gap-4 text-dark">
              <a className="social">
                <i className="bi bi-github fs-1 text-dark"></i>
              </a>
              <a className="social">
                <i className="bi bi-linkedin fs-1 text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
