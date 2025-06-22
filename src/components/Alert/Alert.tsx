import clsx from "clsx";
import style from "./Alert.module.css";
import type { IconType } from "react-icons";

interface Props {
  Icon?: IconType;
  title: string;
  paragraph?: string;
  action?: string;
  type?: string;
  close?: string;
}

export default function Alert({
  Icon,
  title,
  paragraph,
  action,
  type,
  close,
}: Props) {
  return (
    <>
      <div className={style.alertContainer}>
        {Icon && (
          <div
            className={clsx(
              type === "big" && style.bigIconWrap,
              type === "small" && style.smallIconWrap
            )}
          >
            <Icon
              className={clsx(
                type === "big" && style.iconLike,
                type === "small" && style.iconCheck
              )}
            />
          </div>
        )}

        <div className={style.textContainer}>
          <h3>{title}</h3>
          {paragraph && <p>{paragraph}</p>}
          {action && <button className={style.actionButton}>{action}</button>}
        </div>
        {close === "default" && (
          <button
            className={clsx(
              style.defaultButton,
              !paragraph && style.newPositionButton
            )}
          >
            X
          </button>
        )}
        {close === "button" && <button className={style.undoBtn}>Undo</button>}
      </div>
    </>
  );
}
