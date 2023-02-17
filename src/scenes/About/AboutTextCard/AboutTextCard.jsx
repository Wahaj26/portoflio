import data from '../../../constants/data';
import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  const { detailedIntro } = data
  return (
    <div className={s.card}>
      <p style={{ textAlign: "justify" }}>
        {detailedIntro}
      </p>
      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
