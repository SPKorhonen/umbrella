import { defError } from "./deferror";

export const IllegalArityError = defError<number>(() => "illegal arity");

export const illegalArity = (n: number): never => {
    throw new IllegalArityError(n);
};
