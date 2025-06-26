import style from "./Form.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";
import type { ReactNode } from "react";

interface Props {
  Photo?: ReactNode;
  title: string;
  paragraph: string;
  buttons?: React.ReactNode;
  input?: boolean;
}

export default function Form({
  Photo,
  title,
  paragraph,
  buttons,
  input,
}: Props) {
  return (
    <>
      <div className={style.popupContainer}>
        <div className={style.topContainer}>
          {Photo && Photo}
          <div className={style.textContainer}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            {input && (
              <label className={style.popupInputLabel}>
                <input
                  className={style.popupInput}
                  placeholder="email@example.com"
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
