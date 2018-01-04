// waiting on https://github.com/DefinitelyTyped/DefinitelyTyped/pull/22682
declare namespace jest {
  interface MockInstance<T> {
      mock: MockContext<T>;
      mockClear(): void;
      mockReset(): void;
      mockImplementation(fn: (...args: any[]) => any): Mock<T>;
      mockImplementationOnce(fn: (...args: any[]) => any): Mock<T>;
      mockReturnThis(): Mock<T>;
      mockReturnValue(value: any): Mock<T>;
      mockReturnValueOnce(value: any): Mock<T>;
      mockName(value: string): Mock<T>;
      getMockName(): string;
  }
}
