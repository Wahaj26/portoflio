import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ id, image, title, description, type }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link
          to={`/project/${id}`}
          state={{ background: location }}
        >
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ height: '10rem', objectFit: "cover" }}
          />
        </Link>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <span className={s.badge}>
            {type && type}
          </span>
          {/* <p className={s.description}>{description}</p> */}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
