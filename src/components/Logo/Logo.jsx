import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import data from '../../constants/data';
const Logo = ({ className }) => {
  const { fName, lName } = data
  return (
    <div className={className}>
      <Link to={routes.HOME}>
        <div className={s.logo_container}>
          <h1 className={s.logo_title}>
            <span className={s.fName}>{fName}</span>
            <span className={s.lName}>{lName}</span>
          </h1>
        </div>

      </Link>
    </div>
  );
};

export default Logo;
