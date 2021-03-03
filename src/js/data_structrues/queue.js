/**
 * @desc 单向队列
 */
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    /**
     * @desc 向队列尾部添加一个新的项
     * @param element
     */
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    /**
     * @desc 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
     * @desc 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动.
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    /**
     * @desc 如果队列中不包含任何元素，返回true，否则返回false
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * @desc 回队列包含的元素个数，与数组的length属性类似
     */
    size() {
        return this.count - this.lowestCount;
    }

    /**
     * @desc 清空队列
     */
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toSting() {
        if (this.isEmpty()) {
            return ''
        }

        let queueString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount; i < this.count; i++) {
            queueString = `${queueString},${this.items[i]}`
        }

        return queueString;
    }
}

/**
 * @desc  双端队列
 */
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    /**
     * @desc 该方法在双端队列前端添加新的元素。
     * @param el
     */
    addFront(el) {
        if (this.isEmpty()) {
            this.addBack(el)
        } else {
            this.lowestCount--;
            this.items[this.lowestCount] = el
        }
    }

    /**
     * @desc 该方法在双端队列后端添加新的元素
     * @param el
     */
    addBack(el) {
        this.items[this.count] = el;
        this.count++;
    }

    /**
     * @desc 该方法会从双端队列前端移除第一个元素
     */
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result
    }

    /**
     * @desc 该方法会从双端队列后端移除第一个元素
     */
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        let result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    /**
     * @desc 该方法返回双端队列前端的第一个元素
     */
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    /**
     * @desc 该方法返回双端队列后端的第一个元素
     */
    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    /**
     * @desc 如果队列中不包含任何元素，返回true，否则返回false
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * @desc 回队列包含的元素个数，与数组的length属性类似
     */
    size() {
        return this.count - this.lowestCount;
    }

    /**
     * @desc 清空队列
     */
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toSting() {
        if (this.isEmpty()) {
            return ''
        }

        let queueString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount; i < this.count; i++) {
            queueString = `${queueString},${this.items[i]}`
        }

        return queueString;
    }
}