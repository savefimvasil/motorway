import {useEffect, useRef, useState} from "react";
import { Observer } from "../helpers/Observer";

export const BaseImage = ({ url, objectFit= 'cover', title, alt }) => {
  const ref = useRef(null);
  const [onView, setOnView] = useState(false)

  const LoadObserver = new Observer({ root: null, rootMargin: '150px', threshold: 0 })

  useEffect(() => {
    if (ref.current) {
      LoadObserver.observe(ref.current)

      ref.current.addEventListener('inview', event => {
        setOnView(true)
      })
    }

    return () => {
      if (ref.current) {
        LoadObserver.unobserve(ref.current)
      }
    }
  })

  function getSrcSet(type) {
    return url + '.' + type
  }

  return (
    <div ref={ref} className="base-image">
      <div className={`base-image__wrapper ${onView && 'base-image__wrapper--on-view'}`}>
        {onView &&
          <picture className="base-image__picture">
            <source srcSet={getSrcSet('webp')} type="image/webp" />

            <source srcSet={getSrcSet('jpg')} />

            <img
              src={`${url}.jpg`}
              alt={alt}
              title={title}
              className={`base-image__image ${'base-image__image--' + objectFit}`}
            />
          </picture>
        }
      </div>
    </div>
  )
}
