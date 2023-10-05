import { useNavigate } from 'react-router-dom';
import { BarRightBtn } from '../component/BarRightButton/barRightBtn';
import './bar.css';
import { BlueSquare } from '../component/blueSquare/blueSquare';

export const Bar = () => {
  const navigate = useNavigate();
  return (
    <div className="bar">
      <div className="bar__left">
        <BlueSquare />
        <p className="bar__name">Yingji&nbsp;Zheng</p>
      </div>
      <div className="bar__right">
        <BarRightBtn btn={'ABOUT\xa0ME'} handleClick={() => navigate('/')} />
        <BarRightBtn
          btn={'PORJECTS'}
          handleClick={() => navigate('projects')}
        />
        <BarRightBtn btn={'RESUME'} handleClick={() => navigate('resume')} />
        <BarRightBtn btn={'CONTACT'} handleClick={() => navigate('contact')} />
      </div>
    </div>
  );
};
