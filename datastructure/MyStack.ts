import MyArray from "./MyArray";

export default class Stack<T> extends MyArray<T> {
    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}