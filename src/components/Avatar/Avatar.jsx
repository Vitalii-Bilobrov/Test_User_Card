import css from './Avatar.module.css';
import Hansel from '..//..//Images/Hansel.png';

export const Avatar = () => {
  return (
    <div className={css.Line}>
      <div className={css.Circle}>
        <img src={Hansel} alt="Avatar" />
      </div>
    </div>
  );
};
