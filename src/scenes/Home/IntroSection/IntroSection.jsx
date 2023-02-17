import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import data from '../../../constants/data';

const IntroSection = () => {
  const { miniIntro, contacts } = data;
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              {miniIntro}
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          {contacts.map(({ title, href, icon }) => {
            return (
              <li key={title} className={s.socialLink}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={s.socialIcon}
                >
                  {icon}
                </a>
              </li>
            )
          })}

        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
