type ObjectConstructor<TInstance = unknown> = new (page: any) => TInstance;
type ObjectMap = Record<string, ObjectConstructor>;

type LazyObjects<T extends ObjectMap> = {
  [K in keyof T]: InstanceType<T[K]>;
};

export function createLazyObjects<T extends ObjectMap, Obj>(
  objects: T,
  obj: Obj
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