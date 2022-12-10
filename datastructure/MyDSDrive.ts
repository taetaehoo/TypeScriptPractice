import MyStack from "./MyStack";
import MyQueue from "./MyQueue";

const numberStack = new MyStack<number>([]);
numberStack.push(1);
numberStack.push(2);
const data_numberStack = numberStack.pop();

const stringStack = new MyStack<string>([]);
stringStack.push("a");
stringStack.push("b");
const data_stringStack = stringStack.pop();

const numberQueue = new MyQueue<number>([]);
numberQueue.offer(1);
numberQueue.offer(2);
const data_numberQueue = numberQueue.poll();

const stringQueue = new MyQueue<string>([]);
stringQueue.offer("a");
stringQueue.offer("b");
const data_stringQueue = stringQueue.poll();

console.log([data_numberStack, data_stringStack, data_numberQueue, data_stringQueue]);