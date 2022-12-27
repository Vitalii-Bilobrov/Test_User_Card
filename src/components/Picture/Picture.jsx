import css from './Picture.module.css';

import Heart from '..//..//Images/heart.png';
import Main from '..//..//Images/Main.png';
import Dots from '..//..//Images/speech_bubble_dots.png';
import DotsHeart from '..//..//Images/speech_bubble_heart.png';

export const PictureBox = () => {
  return (
    <div className={css.PictureBox}>
      <img className={css.Main} src={Main} alt="Main " />
      <img className={css.Heart} src={Heart} alt="Heart " />
      <img className={css.Dots} src={Dots} alt="Dots " />
      <img className={css.DotsHeart} src={DotsHeart} alt="DotsHeart" />
    </div>
  );
};
