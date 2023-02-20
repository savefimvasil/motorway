export function createEvent (name, bubbles = false, cancelable = true) {
  if (!document) return

  if (window.Event) {
    return new Event(name, { bubbles, cancelable })
  }

  const event = document.createEvent('Event')
  event.initEvent(name, bubbles, cancelable)
  return event
}
