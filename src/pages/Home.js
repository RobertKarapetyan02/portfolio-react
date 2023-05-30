import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="Frontend">Frontend</h2>
              <p className="text-2">ReactJS, JavaScript, HTML, CSS, GitHub</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
