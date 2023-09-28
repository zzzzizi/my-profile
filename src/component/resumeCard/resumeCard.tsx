import './resumeCard.css';

export const ResumeCard = ({
  title,
  time,
  name,
  lineTwo,
  lineThree,
  text,
}: {
  title?: string;
  time: string;
  name: string;
  lineTwo: string;
  lineThree: string;
  text: string;
}) => {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <div className="card__content">
        <div className="card__left">
          <p className="time">{time}</p>
          <p className="name">{name}</p>
          <p className="edu__line__two">{lineTwo} </p>
          <p className="edu__line__three">{lineThree}</p>
        </div>
        <div className="edu__text">{text}</div>
      </div>
    </div>
  );
};
