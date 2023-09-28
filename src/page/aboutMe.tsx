import './aboutMe.css';
import { MyProfile } from '../component/myProfile/myProfile';

export const AboutMe = () => {
  return (
    <div className="me">
      {/* <div className="me__left"></div> */}
      <div className="me__right">
        <MyProfile />
      </div>
    </div>
  );
};
