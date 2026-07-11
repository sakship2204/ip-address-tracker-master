type Listener<TState> = (state: Readonly<TState>) => void;
type StateUpdate<TState> =
  | Partial<TState>
  | ((state: Readonly<TState>) => Partial<TState>);

class Store<TState extends object> {
  private currentState: TState;
  private listeners = new Set<Listener<TState>>();

  constructor(initialState: TState) {
    this.currentState = { ...initialState };
  }

  getState() {
    return this.currentState as Readonly<TState>;
  }

  setState(update: StateUpdate<TState>) {
    const nextPartialState =
      typeof update === "function" ? update(this.getState()) : update;

    const changed = (Object.keys(nextPartialState) as Array<keyof TState>).some(
      (key) => !Object.is(this.currentState[key], nextPartialState[key]),
    );

    if (!changed) return;

    this.currentState = {
      ...this.currentState,
      ...nextPartialState,
    };

    this.listeners.forEach((listener) => listener(this.getState()));
  }

  subscribe(listener: Listener<TState>) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }
}

export default Store;
