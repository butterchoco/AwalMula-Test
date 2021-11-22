import { useEffect, useRef } from "react";

export default function useEventListener(eventType, callback, element) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tempEl = element || window;
    if (tempEl == null) return;
    const handler = (e) => callbackRef.current(e);
    tempEl.addEventListener(eventType, handler);

    return () => tempEl.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
