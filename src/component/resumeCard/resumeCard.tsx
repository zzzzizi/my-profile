import './resumeCard.css';

export const ResumeCard = ({
  title,
  time,
  name,
  lineTwo,
  lineThree,
  textOne,
  textTwo,
  textThree,
  textFour,
  summary,
}: {
  title?: string;
  time?: string;
  name?: string;
  lineTwo?: string;
  lineThree?: string;
  textOne: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;
  summary: boolean;
}) => {
  return (
    <div className="card">
      <div>
        <p className="card__title">{title}</p>
        {summary ? (
          <div className="card__summary">
            <div className="card__summary__p">
              <p>{textOne}</p>
              <p>{textTwo}</p>
              <p>{textThree}</p>
              <p>{textFour}</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="card__content">
              <div className="card__left">
                <p className="time">{time}</p>
                <p className="name">{name}</p>
                <p className="card__line__two">{lineTwo} </p>
                <p className="card__line__three">{lineThree}</p>
              </div>
              <div className="card__text">
                <p>{textOne}</p>
                <p>{textTwo}</p>
                <p>{textThree}</p>
                <p>{textFour}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
