import { ComponentPropsWithoutRef } from "react";
import HeartLike from "../../../assets/heart";
import HeartLiked from "../../../assets/liked";
import clsx from "clsx";
import s from "./LikeButton.module.css";
type Props = {
  isLiked: boolean;
} & ComponentPropsWithoutRef<"button">;
export const LikeButton = ({ isLiked, className, ...rest }: Props) => {
  return (
    <button className={clsx(s.likeBtn, className)} {...rest}>
      {isLiked ? <HeartLiked /> : <HeartLike />}
    </button>
  );
};
