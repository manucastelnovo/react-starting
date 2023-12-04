import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

export function Header() {
  const reactDescription = ["Fundamentals", "Crucial", "Core"];
  const description = reactDescription[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
