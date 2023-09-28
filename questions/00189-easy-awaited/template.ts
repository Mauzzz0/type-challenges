type MyAwaited<T> = T extends PromiseLike<infer U> ? U extends Promise<unknown> ? MyAwaited<U> : U : never;
