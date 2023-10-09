import './resume.css';
import { PageTitle } from '../component/pageTitle/pageTitle';
import { ResumeCard } from '../component/resumeCard/resumeCard';

export const Resume = () => {
  const eduTime = '2010 - 2014';
  const eduName = 'Sichuan University';
  const eduDegree = "Bachelor's degree";
  const eduMajor = 'Major: Finance';
  const skillText =
    'HTML, CSS, React.js, Redux.js, Epic.js, RxJs, Typescript, JavaScript, REST APIs, Design Patterns, Interactive Applications, Functional Requirements, Responsive Web Design, User Interface Design, User Experience Design';
  const skillTime = '2022 - 2023';
  const expOneTime = '2014 - 2017';
  const expOneName = 'Agricultural Bank of China';
  const expOneLocation = 'Wenzhou, Zhejiang, China';
  const expOneTitle = 'Bank Teller';
  const expTextOne = '- Manage the overall cash of the bank branch.';
  const expTextTwo = '- Help interns to be familiar with the bank business.';
  const expTextThree = '- Manage the gold business of the bank branch.';
  const expTextFour = '-Assist VIP customers in business. ';
  const expTwoTime = '2013 - 2014';
  const expTwoName = 'Agricultural Bank of China';
  const exTwoTitle = 'Intern';
  const expTwoLocation = 'Wenzhou, Zhejiang, China';
  const expTwoTextOne = "- Help loan officer to verify customer's information.";
  const expTwoTextTwo =
    "- Make a phone call to confirm the company customers' credit information.";
  const sumTextOne =
    '- Self-taught front-end developer with strong foundation knowledge in JavaScript and  TypeScript, along with building dynamic UI using React.js';
  const sumTextTwo =
    '- Experiences in state management with Redux and data handling using RxJS and Epics.';
  const sumTextThree =
    '- Work with Problem-solving abilities to contribute to innovative frontend projects.';

  return (
    <div className="page">
      <PageTitle title="Resume" />
      <ResumeCard
        title="Technical Skill"
        time={skillTime}
        lineTwo="Self-taught"
        textOne={skillText}
        summary={false}
      />
      <ResumeCard
        title="Education"
        time={eduTime}
        name={eduName}
        lineTwo={eduDegree}
        lineThree={eduMajor}
        textOne="A"
        summary={false}
      />
      <ResumeCard
        title="Summary"
        textOne={sumTextOne}
        textTwo={sumTextTwo}
        textThree={sumTextThree}
        summary={true}
      />
      <ResumeCard
        title="Experience"
        time={expOneTime}
        name={expOneName}
        lineTwo={expOneTitle}
        lineThree={expOneLocation}
        textOne={expTextOne}
        textTwo={expTextTwo}
        textThree={expTextThree}
        textFour={expTextFour}
        summary={false}
      />
      <ResumeCard
        title="Experience"
        time={expTwoTime}
        name={expTwoName}
        lineTwo={exTwoTitle}
        lineThree={expTwoLocation}
        textOne={expTwoTextOne}
        textTwo={expTwoTextTwo}
        summary={false}
      />
    </div>
  );
};
