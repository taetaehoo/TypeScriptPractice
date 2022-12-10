import MyArray from "./MyArray";

export default class Queue<T> extends MyArray<T> {
    offer(item: T) : void{
        this.items.push(item);
    }

    poll(): T | undefined {
        return this.items.shift();
    }
}