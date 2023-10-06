import gitHubIcon from '../assets/gitHubIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
import './footer.css';

export const Footer = () => {
  const urlOne = 'https://www.linkedin.com/in/yingji-zheng-378ab9289/';
  const urlTwo = 'https://github.com/zzzzizi';

  return (
    <div className="footer">
      <div className="footer__img__container">
        <a href={urlTwo}>
          <img src={gitHubIcon} alt="gitHub" className="footer__img" />
        </a>
      </div>
      <div>
        <a href={urlOne}>
          <img src={linkedinIcon} alt="linkedin" className="footer__img" />
        </a>
      </div>
    </div>
  );
};
