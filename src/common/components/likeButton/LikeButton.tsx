import { ComponentPropsWithoutRef, useState } from 'react'
import HeartLike from '../../../assets/heart'
import HeartLiked from '../../../assets/liked'
import clsx from 'clsx'
import s from './LikeButton.module.css'
type Props = {
  isLiked: boolean
} & ComponentPropsWithoutRef<'button'>
export const LikeButton = ({ isLiked, className, ...rest }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={clsx(s.likeBtn, className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {isHovered || isLiked ? <HeartLiked /> : <HeartLike />}
    </button>
  )
}
