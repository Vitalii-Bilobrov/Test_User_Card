import css from './Container.module.css';
import Logo from '..//..//Images/Logo.png';
export const Container = ({ children }) => {
  return (
    <div className={css.Container}>
      <img className={css.Logo} src={Logo} alt="Logo 'Go IT'" />
      {children}
    </div>
  );
};
