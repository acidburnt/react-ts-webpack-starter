import React from 'react';

export function useCountdown(timeout: number) {
  const [isCounting, setState] = React.useState(false);
  const timeoutId = React.useRef<NodeJS.Timeout>();

  const startCountdown = React.useCallback(() => {
    setState(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setState(false);
    }, timeout);
  }, [timeout]);

  return { isCounting, startCountdown };
}
