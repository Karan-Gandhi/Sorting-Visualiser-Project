class Graph {
    constructor(size, width, height, root) {
        this.array = [];
        for (let i = 0; i < size; i++) {
            this.array.push(0);
        }
        this.size = size;
        this.dimentions = {
            w: width,
            h: height
        };
        this.root = root;
    }

    randomise() {
        for (let i = 0; i < this.size; i++) {
            this.array[i] = Math.floor(Math.random() * (1000 - 10) + 10);
        }
    }

    show() {
        let barWidth = this.dimentions.w / this.array.length - 1;
        for (let i = 0; i < this.array.length; i++) {
            let bar = createElement("div", "bar");
            bar.style.position = "absolute";
            bar.style.left = i * barWidth + i + "px";
            bar.style.bottom = 0 + "px";
            bar.style.width = barWidth + "px";
            bar.style.height = (this.array[i] / 1000) * this.dimentions.h + "px";
            this.root.append(bar);
        }
    }
}

function createElement(tag, id) {
    const elt = document.createElement(tag);
    elt.id = id;
    return elt;
}
