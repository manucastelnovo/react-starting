import { Header } from "./components/Header/Header.jsx";
import TabButtom from "./components/TabButtom.jsx";
import { CORE_CONCEPTS } from "./data.js";

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButtom>Basic</TabButtom>
              <TabButtom>JSX</TabButtom>
              <TabButtom>State</TabButtom>
              <TabButtom>Props</TabButtom>
            </menu>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
