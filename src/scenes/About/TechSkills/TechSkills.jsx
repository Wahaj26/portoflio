import s from './TechSkills.module.scss';
import data from '../../../constants/data';
const TechSkills = () => {
  const { skills } = data;
  return (
    <ul className={s.container}>
      {skills.map((skill, i) => {
        return (
          <li key={i} className={s.techIcon}>
            {skill()}
          </li>
        )
      })}
    </ul>
  );
};

export default TechSkills;
