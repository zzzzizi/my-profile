import myPic from '../../assets/myPic.jpg';
import './myProfile.css';
import { ProfileBtn } from '../profileBtn/pfofileBtn';

export const MyProfile = () => {
  return (
    <div className="profile">
      <div className="profile__content">
        <div className="card__container">
          <img src={myPic} alt="Me" className="pic" />
          <p className="profile__nanme">Yingji</p>
          <p className="profile__nanme">Zheng</p>
          <div className="line"></div>
          <p className="title">FRONTEND DEVELOPER</p>
        </div>
        <div className="paragraph">
          <p className="paragraph__top">Hello</p>
          <p className="paragraph__middle">Here's who I am & what I do</p>
          <div className="paragraph__btn">
            <ProfileBtn text={'RESUME'} />
            <ProfileBtn text="PROJECTS" />
          </div>
          <p>some introduction</p>
        </div>
      </div>
    </div>
  );
};
