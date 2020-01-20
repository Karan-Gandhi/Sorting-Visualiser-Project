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
            this.array[i] = Math.floor(Math.random() * (1000 - 50) + 50);
        }
    }

    showGraph() {
        let barWidth = this.dimentions.w / this.array.length - 1;
        for (let i = 0; i < this.array.length; i++) {
            const bar = createElement("div", "bar");
            bar.style.position = "absolute";
            bar.style.left = i * barWidth + i + "px";
            bar.style.bottom = 0 + "px";
            bar.style.width = barWidth + "px";
            bar.style.height = (this.array[i] / 1000) * this.dimentions.h + "px";
            this.root.append(bar);
        }
        for (var i = 30; i < this.dimentions.h; i += 30) {
            const line = createElement("div", "tick");
            line.innerHTML = i;
            line.style.position = "absolute";
            line.style.bottom = i + "px";
            line.style.left = -25 + "px";
            this.root.append(line);
        }
    }
}

function createElement(tag, id) {
    const elt = document.createElement(tag);
    elt.id = id;
    return elt;
}
