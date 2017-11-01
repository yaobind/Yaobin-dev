class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        } else {
            return this.stack.pop();
        }
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        } else {
            return this.stack[this.stack.length - 1];
        }
    }

    size() {
        return this.stack.length;
    }
}

class History {
    constructor(initState = {}) {
        this.prev = new Stack();
        this.curt = _.cloneDeep(initState);
        this.future = new Stack();
    }

    save(state, callback) {
        this.prev.push(this.curt);
        this.future = new Stack();
        this.curt = _.cloneDeep(state);
        callback();
    }

    undo(callback) {
        if (!this.canUndo()) {
            throw new Error("can not undo");
        }

        this.future.push(this.curt);
        this.curt = this.prev.pop();
        callback(_.cloneDeep(this.curt));
    }

    redo(callback) {
        if (!this.canRedo()) {
            throw new Error("can not redo");
        }

        this.prev.push(this.curt);
        this.curt = this.future.pop();
        callback(_.cloneDeep(this.curt));
    }

    canUndo() {
        !this.prev.isEmpty();
    }

    canRedo() {
        !this.future.isEmpty();
    }
}