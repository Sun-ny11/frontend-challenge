import clsx from 'clsx'
import { ElementRef, forwardRef } from 'react'
import { Card } from '../card/Card'
import s from './Cards.module.css'
import { CatImage } from '../../../features/allCards/model/types'

type Props = {
  cats: CatImage[]
  handleLikeClick?: (id: string) => void
}

export const Cards = forwardRef<ElementRef<'div'>, Props>(
  ({ cats, handleLikeClick }, ref) => {
    const onClickHandler = (id: string) => {
      if (handleLikeClick) {
        handleLikeClick(id)
      }
    }
    return (
      <div className={clsx('container', s.content)}>
        {cats.map((el) => (
          <Card
            isLiked={!!el.favourite}
            callBack={() => onClickHandler(el.id)}
            key={el.id}
            src={el.url}
          />
        ))}
        <div
          ref={ref}
          className={s.element}
        />
      </div>
    )
  }
)
