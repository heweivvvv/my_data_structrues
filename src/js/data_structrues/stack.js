/**
 * @desc 对象栈
 */

class ObjectStack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    /**
     * @desc 向栈中插入元素
     * @param el
     */
    push(el) {
        this.items[this.count] = el;
        this.count++;
    }

    /**
     * @desc 获取栈的大小
     * @returns {number}
     */
    size() {
        return this.count;
    }

    /**
     * @desc 判断栈是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.count === 0;
    }

    /**
     * @desc 从栈中弹出元素
     * @returns {undefined}
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    /**
     * @desc 访问栈顶元素
     * @returns {undefined|*}
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    /**
     * @desc 清空栈
     */
    clear() {
        this.items = {};
        this.count = 0

        /* while (!this.isEmpty()) {
             this.pop();
         }*/
    }
}

/**
 * @desc 数组栈
 */
class ArrayStack {
    constructor() {
        this.items = [];
    }

    /**
     * @desc 向栈中插入元素
     * @param el
     */
    push(el) {
        this.items.push(el)
    }

    /**
     * @desc 获取栈的大小
     * @returns {number}
     */
    size() {
        return this.items.length;
    }

    /**
     * @desc 判断栈是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * @desc 从栈中弹出元素
     * @returns {undefined}
     */
    pop() {
        return this.items.pop();
    }

    /**
     * @desc 访问栈顶元素
     * @returns {undefined|*}
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * @desc 清空栈
     */
    clear() {
        this.items = [];
        /* while (!this.isEmpty()) {
             this.pop();
         }*/
    }
}

export {ObjectStack, ArrayStack};