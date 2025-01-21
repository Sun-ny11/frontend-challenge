import { ComponentPropsWithoutRef } from 'react'
import s from './Card.module.css'
import clsx from 'clsx'

import { LikeButton } from '../likeButton/LikeButton'

type Props = {
  callBack?: () => void
  isLiked: boolean
} & ComponentPropsWithoutRef<'img'>

export const Card = ({ callBack, className, isLiked, ...rest }: Props) => {
  return (
    <div className={s.main}>
      <img
        {...rest}
        className={clsx(s.img, className)}
      />
      <LikeButton
        isLiked={isLiked}
        className={clsx(s.likeBtn, isLiked && s.liked)}
        onClick={callBack}
      />
    </div>
  )
}
