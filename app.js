import { messages } from "./messages.js";

const rIndex = () => {
    return Math.floor(Math.random() * messages.length)
}

console.log(messages[rIndex()])
