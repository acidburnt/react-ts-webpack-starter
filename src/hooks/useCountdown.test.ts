import { renderHook, act } from '@testing-library/react-hooks';
import { useCountdown } from './useCountdown';

jest.useFakeTimers();

describe('useCountdown', () => {
  const { result } = renderHook(() => useCountdown(3000));

  it('should be false as initial value', () => {
    expect(result.current.isCounting).toBe(false);
  });

  it('should be true once called the start function', () => {
    act(() => result.current.startCountdown());
    expect(result.current.isCounting).toBe(true);
    act(() => jest.advanceTimersByTime(1000));
    expect(result.current.isCounting).toBe(true);
  });

  it('should be false again', () => {
    act(() => result.current.startCountdown());
    act(() => jest.advanceTimersByTime(3001));
    expect(result.current.isCounting).toBe(false);
  });
});
