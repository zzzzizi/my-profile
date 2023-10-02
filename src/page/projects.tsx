import './projects.css';
import { PageTitle } from '../component/pageTitle/pageTitle';
import { ProjectCard } from '../component/projectCard/projectCard';
import pokemonPic from '../assets/pokemonPic.png';

export const Projects = () => {
  const pokemonSkill =
    'CSS· TypeScript · React.js · Redux.js · RxJS · User Interface Design · Responsive Web Design · REST APIs · Routers';
  const pokemonText =
    'The Pokemon project is a web application that allows users to searchfor specific Pokemon, browse a list of all Pokemon, and play small games with their friends.';
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
        text={pokemonText}
        skill={pokemonSkill}
        pic={pokemonPic}
      />
      <ProjectCard
        pName="My Pokemon"
        text={pokemonText}
        skill={pokemonSkill}
        pic={pokemonPic}
      />
    </div>
  );
};
