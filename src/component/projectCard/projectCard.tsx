import './projectCard.css';

export const ProjectCard = ({
  pName,
  text,
  skill,
  pic,
}: {
  pName: string;
  text: string;
  skill: string;
  pic: string;
}) => {
  return (
    <div className="project__card">
      <div className="project__card__left">
        <div className="project__name__line">
          <div className="project__name__left"></div>
          <p className="project__name">{pName}</p>
        </div>
        <div>
          <p className="project__text">{text}</p>
        </div>
        <div className="project__skill">
          <p>Skill:</p>
          <p>{skill}</p>
        </div>
      </div>
      <div className="project__card__right">
        <img src={pic} alt="projext" className="project__pic" />
      </div>
    </div>
  );
};
