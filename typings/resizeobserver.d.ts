interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
}

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}

interface ResizeObserver {
  observe(target: Element): void;
  unobserve(target: Element): void;
  disconnect(): void;
}

interface ResizeObserverInstance {
  prototype: ResizeObserver;
  new (callback: ResizeObserverCallback): ResizeObserver;
}

declare var ResizeObserver: ResizeObserverInstance;

interface Window {
  ResizeObserver: ResizeObserverInstance;
}
