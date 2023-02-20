/**
 * To prevent memory leaks:
 * 1. Don't save Observer instance to 'this' (Vue instance)
 * 2. Do observer.unobserve on beforeDestroy
 */

import isElement from 'lodash/isElement'
import { createEvent } from './create-event'

// Events that fire on observed element
const EVENTS = {
  INVIEW: 'inview',
  OUTVIEW: 'outview'
}

export class Observer {
  constructor (settings = { root: null, rootMargin: '0px', threshold: 0.05 }) {
    if (!document) return

    const observer = new IntersectionObserver(callback, settings)
    const events = {}

    this.observe = function (el) {
      if (isElement(el)) {
        observer.observe(el)
      }
    }

    this.unobserve = function (el) {
      if (isElement(el)) {
        observer.unobserve(el)
      }
    }

    initEvents()

    function callback (entries, observer) {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        const options = {
          repeat: false
        }

        Object.assign(options, getDataOptions(entry.target.dataset))

        if (entry.isIntersecting) {
          entry.target.dispatchEvent(events.INVIEW)
          if (!options.repeat) observer.unobserve(entry.target)
        } else {
          entry.target.dispatchEvent(events.OUTVIEW)
        }
      }
    }

    function getDataOptions (dataset) {
      return {
        // add data-observer-repeat='true' for prevent unobserve
        repeat: dataset.observerRepeat === 'true'
      }
    }

    function initEvents () {
      Object.keys(EVENTS).forEach(eventName => {
        events[eventName] = createEvent(EVENTS[eventName])
      })
    }
  }
}
