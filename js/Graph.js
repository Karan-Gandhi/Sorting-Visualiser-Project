class Graph {
    constructor(array, size) {
        this.array = array;
        this.size = size;
    }

    randomise() {
        for (let i = 0; i > size; i++) {
            this.array[i] = Math.floor(Math.random() * 1000 + 10);
        }
    }
}
