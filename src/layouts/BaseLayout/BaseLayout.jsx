import s from './BaseLayout.module.scss';
import Header from '../../components/Header/Header';
import Particles from '../../components/UIElements/Particles/Particles';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

const BaseLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Particles />

      <Header>
        <MainNavigation />
      </Header>

      <div className={s.container}>{children}</div>

    </div>
  );
};

export default BaseLayout;
