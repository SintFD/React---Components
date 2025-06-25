import style from "./Popups.module.css";
import type { IconType } from "react-icons";
import CloseBtn from "../CloseBtn/CloseBtn";

interface Props {
  Icon?: IconType;
  title: string;
  paragraph: string;
  buttons?: React.ReactNode;
  input?: boolean;
}

export default function Popups({
  Icon,
  title,
  paragraph,
  buttons,
  input,
}: Props) {
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
            <h2>{title}</h2>
            <p>{paragraph}</p>
            {input && (
              <label className={style.popupInputLabel}>
                Your password
                <input
                  className={style.popupInput}
                  placeholder="Enter your password here"
                />
              </label>
            )}
          </div>
        </div>

        <CloseBtn paragraph={paragraph} />
        {buttons && <div className={style.buttonsContainer}>{buttons}</div>}
      </div>
    </>
  );
}
