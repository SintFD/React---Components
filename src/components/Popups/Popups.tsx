import style from "./Popups.module.css";
import type { IconType } from "react-icons";
import CloseBtn from "../closeBtn/closeBtn";
import Button from "../Button/Button";

interface Props {
  Icon?: IconType;
  title: string;
  paragraph: string;
}

export default function Popups({ Icon, title, paragraph }: Props) {
  return (
    <>
      <div className={style.popupContainer}>
        <div className={style.topContainer}>
          {Icon && (
            <div className={style.bigIconWrap}>
              <Icon className={style.iconSmile} />
            </div>
          )}
          <div className={style.textContainer}>
            <h3>{title}</h3>
            <p>{paragraph}</p>
          </div>
        </div>

        <CloseBtn paragraph={paragraph} />
        <div className={style.buttonsContainer}>
          <Button color="white" text="Reject" />
          <Button color="black" text="Accept" />
        </div>
      </div>
    </>
  );
}
