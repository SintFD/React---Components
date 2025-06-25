import style from "./Modal.module.css";
import type { IconType } from "react-icons";
import CloseBtn from "../CloseBtn/CloseBtn";
import clsx from "clsx";

interface Props {
  Icon?: IconType;
  title: string;
  paragraph?: string;
  buttons?: React.ReactNode;
}

export default function Modal({ Icon, title, paragraph, buttons }: Props) {
  return (
    <>
      <div className={style.popupContainer}>
        <div
          className={clsx(
            style.topContainer,
            !paragraph && style.newTopContainer
          )}
        >
          {Icon && (
            <div
              className={clsx(
                style.bigIconWrap,
                !paragraph && style.newBigIconWrap
              )}
            >
              <Icon className={style.iconSmile} />
            </div>
          )}
          <div className={style.textContainer}>
            <h2>{title}</h2>
            {paragraph && <p>{paragraph}</p>}
          </div>
        </div>

        <CloseBtn paragraph={" "} />
        {buttons && <div className={style.buttonsContainer}>{buttons}</div>}
      </div>
    </>
  );
}
