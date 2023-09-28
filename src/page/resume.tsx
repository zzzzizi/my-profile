import './resume.css';
import { BlueSquare } from '../component/blueSquare/blueSquare';
import { ResumeCard } from '../component/resumeCard/resumeCard';

export const Resume = () => {
  const eduTime = '2010 - 2014';
  const eduName = 'Sichuan University';
  const eduDegree = "Bachelor's degree";
  const eduMajor = 'Major: Finance';
  return (
    <div className="resume">
      <div className="resume__title">
        <BlueSquare />
        <p>Resume</p>
      </div>
      <ResumeCard
        title="Education"
        time={eduTime}
        name={eduName}
        lineTwo={eduDegree}
        lineThree={eduMajor}
        text="A"
      />
    </div>
  );
};
