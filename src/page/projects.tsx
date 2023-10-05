import './projects.css';
import { PageTitle } from '../component/pageTitle/pageTitle';
import { ProjectCard } from '../component/projectCard/projectCard';
import pokemonPic from '../assets/pokemonPic.png';
import weatherPic from '../assets/weatherPic.png';
import calculatorPic from '../assets/calculatorPic.png';

export const Projects = () => {
  const pokemonSkill =
    'CSS· TypeScript · React.js · Redux.js · RxJS · User Interface Design · Responsive Web Design · REST APIs · Routers';
  const pokemonText =
    'The Pokemon project is a web application that allows users to search for specific Pokemon, browse a list of all Pokemon, and play small games with their friends.';
  const weatherText =
    'Weather App is a web application that allows users to search for the weather forecast for a city for the next three days. Additionally, users can register and log in to manage their favorite cities and receive weather updates.';
  const weatherSkill =
    'CSS· TypeScript · React.js · Redux.js · REST APIs · Routers · chart.js · formik · yup';
  const calculatorText =
    'The Calculator App is a web application that allows users to calculate simple and advanced mathematical functions, which changes Infix notation to Polish postfix notation to make calculator results more precise and helps you to record the calculated formula.';
  const calculatorSkill = 'CSS· TypeScript · React.js · Redux.js ';

  return (
    <div className="page">
      <PageTitle title="Projects" />
      <ProjectCard
        pName="My Pokemon"
        text={pokemonText}
        skill={pokemonSkill}
        pic={pokemonPic}
      />
      <ProjectCard
        pName="My Weather"
        text={weatherText}
        skill={weatherSkill}
        pic={weatherPic}
      />
      <ProjectCard
        pName="My Calculator"
        text={calculatorText}
        skill={calculatorSkill}
        pic={calculatorPic}
      />
    </div>
  );
};
