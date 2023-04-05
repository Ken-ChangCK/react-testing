import { render, renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same intial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 2 },
    });
    expect(result.current.count).toBe(2);
  });

  test("should increase the count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test("should decrease the count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
