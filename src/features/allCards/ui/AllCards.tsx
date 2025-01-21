import { useEffect, useState } from 'react'
import { useCats } from '../model/catStore'
import { Loader } from '../../../common/components/loader/Loader'
import { Cards } from '../../../common/components/cards/Cards'
import { useElementOnScreen } from '../../../common/hooks/useElementOnScreen'

export const AllCards = () => {
  const cats = useCats((state) => state.cats)
  const loading = useCats((state) => state.loading)
  const toggleLikeCats = useCats((state) => state.toggleLikeCats)
  const fetchCats = useCats((state) => state.fetchCats)
  const { ref, visible } = useElementOnScreen<HTMLDivElement>()
  const [triggerLoading, setTriggerLoading] = useState(false)

  useEffect(() => {
    const triggerRerender = () => {
      if (!ref.current) {
        return
      }
      const windowHeight = document.documentElement.clientHeight
      const containerRect = ref.current.getBoundingClientRect()
      const spaceBelow = windowHeight - containerRect.bottom > 40

      if (spaceBelow) {
        setTriggerLoading((prev) => !prev)
      }
    }
    const controller = new AbortController()

    const signal = controller.signal

    if (visible) {
      fetchCats(signal).then(() => triggerRerender())
    }

    return () => {
      controller.abort()
    }
  }, [visible, fetchCats, triggerLoading, ref])

  return (
    <>
      <Cards
        handleLikeClick={toggleLikeCats}
        cats={cats}
        ref={ref}
      />
      {loading && <Loader />}
    </>
  )
}
