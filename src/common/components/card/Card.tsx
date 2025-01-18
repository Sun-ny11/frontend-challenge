import { ComponentPropsWithoutRef } from "react";
import s from "./Card.module.css";
import clsx from "clsx";
import HeartLike from "../../../assets/heart";

export const Card = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"img">) => {
  return (
    <div className={s.main}>
      <img {...rest} className={clsx(s.img, className)} />
      <button className={s.likeBtn}>
        <HeartLike className={s.heartLike} />
      </button>
    </div>
  );
};
