import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = ({ link }) => {
  const imgCover = document.querySelectorAll(".project-details__cover");
  return (
    <a
      href="https://robertkarapetyan02.github.io/"
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
