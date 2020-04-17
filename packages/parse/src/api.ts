import type { Fn, Fn0, Nullable } from "@thi.ng/api";
import { ParseContext } from "./context";

export interface ParseScope<T> {
    id: string;
    state: Nullable<ParseState<T>>;
    children: Nullable<ParseScope<T>[]>;
    result: any;
}

export interface ParseState<T> {
    p: number;
    l: number;
    c: number;
    done?: boolean;
    last?: T;
}

export interface IReader<T> {
    read(state: ParseState<T>): T;
    next(state: ParseState<T>): void;
    isDone(state: ParseState<T>): boolean;
    format(state: ParseState<T>): string;
}

export type Parser<T> = Fn<ParseContext<T>, boolean>;

export type PassValue<T> = T | Fn0<T>;

export type ScopeTransform<T> = (
    scope: Nullable<ParseScope<T>>,
    ctx: ParseContext<T>,
    user?: any
) => Nullable<ParseScope<T>>;
