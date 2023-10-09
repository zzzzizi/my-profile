import './contactCard.css';

export const ContactCard = () => {
  const urlOne = 'https://www.linkedin.com/in/yingji-zheng-378ab9289/';
  const urlTwo = 'https://github.com/zzzzizi';
  return (
    <div>
      <div className="card__contact">
        <div className="contact">
          <div>
            <p>My Linkedin:</p>
            <a href={urlOne} className="linkedin__url">
              {urlOne}
            </a>
          </div>
          <div>
            <p>My Github:</p> <a href={urlTwo}>{urlTwo}</a>
          </div>

          <div>
            <p>My Phone Number:</p>
            <p className="phone__number"> +47 40616152</p>
          </div>
          <div>
            <p>My Email:</p>
            <p className="phone__number"> niangzizeng@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
