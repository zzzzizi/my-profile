import myPic from '../../assets/myPic.jpg';
import './myProfile.css';
import { useNavigate } from 'react-router-dom';
import { ProfileBtn } from '../profileBtn/pfofileBtn';

export const MyProfile = () => {
  const navigate = useNavigate();
  const introduction =
    'I have been self-learning front-end development software for a year and have a solid foundation in HTML, CSS, TypeScript and react.js.';
  return (
    <div className="profile">
      <div className="profile__content">
        <div className="card__container">
          <img src={myPic} alt="Me" className="pic" />
          <p className="profile__name">Yingji</p>
          <p className="profile__name">Zheng</p>
          <div className="line"></div>
          <p className="title">FRONTEND DEVELOPER</p>
        </div>
        <div className="paragraph">
          <p className="paragraph__top">Hello</p>
          <p className="paragraph__middle">Here's who I am & what I do</p>
          <div className="paragraph__btn">
            <ProfileBtn text="RESUME" handleClick={() => navigate('/resume')} />
            <ProfileBtn
              text="PROJECTS"
              handleClick={() => navigate('/resume')}
            />
          </div>
          <p>{introduction}</p>
        </div>
      </div>
    </div>
  );
};
