type ObjectConstructor<TArg, TInstance = unknown> = new (page: TArg) => TInstance;
type ObjectMap<TArg> = Record<string, ObjectConstructor<TArg>>;

type LazyObjects<T extends Record<string, new (...args: never[]) => unknown>> = {
  [K in keyof T]: InstanceType<T[K]>;
};

export function createLazyObjects<Obj, T extends ObjectMap<Obj>>(
  objects: T,
  obj: Obj,
): LazyObjects<T> {
  const cache: Partial<LazyObjects<T>> = {};

  return new Proxy({} as LazyObjects<T>, {
    get(_, prop: string | symbol) {
      if (typeof prop !== "string") return undefined;

      const ClassRef = objects[prop];
      if (!ClassRef) return undefined;

      if (!cache[prop as keyof T]) {
        cache[prop as keyof T] = new ClassRef(obj) as LazyObjects<T>[keyof T];
      }

      return cache[prop as keyof T];
    },
  });
}
