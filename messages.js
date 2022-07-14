export const messages = {
    _intro: [
        "You are a"
        , "You have a"
        , "You will a"
    ],
    _adjcetives: [
        "alive", "better", "careful", "clever", "dead", "easy", "famous", "gifted", "hallowed", "helpful", "important", "inexpensive", "mealy", "mushy", "odd", "poor", "powerful", "rich", "shy", "tender",
        "unimportant", "uninterested", "vast", "wrong"
    ],
    _objects: ["Pen","Computer", "Notebook", "Desk", "Pencil", "Bookcase", "Book", "Chair", "Backpack", "Paper", "Glue", "Door", "Ruler", "Clock", "Whiteboard", "Window"],
    _rIndex(words) {
        return Math.floor(Math.random() * words.length)
    },
    create() {
        return `${this._intro[this._rIndex(this._intro)]} ${this._adjcetives[this._rIndex(this._adjcetives)]} ${this._objects[this._rIndex(this._objects)]}!`
    }
}