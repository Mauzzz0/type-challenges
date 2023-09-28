type TupleToObject<T extends readonly (keyof any)[]> = {
  [V in T[number]]: V
}
