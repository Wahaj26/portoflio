import s from './ModalProjectCard.module.scss';
import { BiLinkExternal } from 'react-icons/all';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '../../../hooks/modalHook';
import { PROJECTS } from '../../../constants/projects';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, description, link, techs } = PROJECTS.find(
    (p) => id === p.id,
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, [toggleModal]);

  return (
    createPortal(
      <Modal show={isVisible} onClose={toggleModal}>
        <div className={s.cardWrapper}>
          <LazyLoadImage
            alt="project-img"
            src={image.src}
            effect="blur"
            width="100%"
            wrapperClassName={s.image}
          />

          <div className={s.cardBody}>
            <h3 className={s.title}>{title}</h3>
            <p style={{ textAlign: 'center', padding: "0 .8rem" }}>{description && description}</p>
            <div className={s.technologies}>
              {techs && techs.length && techs.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>

          {link && <Button
            style={{ width: '12rem' }}
            className="primary"
            href={link}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; View project
          </Button>}
          {/* <div className={s.cardFooter}>
            

            {!!links.repo && (
              <Button
                style={{ width: '12rem' }}
                className="primary"
                href={links.repo}
                target="_blank"
              >
                <BiLinkExternal /> &nbsp; Know more
              </Button>
            )}
          </div> */}
        </div>
      </Modal>,
      document.getElementById('modal-root')
    )
  );
};

export default ModalProjectCard;
