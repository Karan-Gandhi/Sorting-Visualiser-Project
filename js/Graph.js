/**
 * @author Karan Gandhi
 * @email karangandhi.programming@gmail.com
 *
 * This is a graph class which will visualise the array which will be randomised
 *
 * @class Graph
 */
class Graph {
    /**
     * Creates an instance of Graph.
     * @param {Integer}} size
     * @param {Double} width
     * @param {Double} height
     * @param {DOM Element} root
     * @memberof Graph
     */
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
        this.bars = [];
    }

    /**
     * This is to randomise all the elements of the arrat
     *
     * @memberof Graph
     */
    randomise() {
        for (let i = 0; i < this.size; i++) {
            this.array[i] = Math.floor(Math.random() * (1000 - 50) + 50);
        }
    }

    /**
     * This is to display all the values in the array in the for of a bar graph
     *
     * @memberof Graph
     */
    showGraph() {
        this.root.innerHTML = "";
        this.bars.length = 0;
        let barWidth = this.dimentions.w / this.array.length - 1;
        for (let i = 0; i < this.array.length; i++) {
            const bar = createElement("div", "bar");
            bar.style.position = "absolute";
            bar.style.left = i * barWidth + i + "px";
            bar.style.bottom = 0 + "px";
            bar.style.width = barWidth + "px";
            bar.style.height = (this.array[i] / 1000) * this.dimentions.h + "px";
            this.root.append(bar);
            this.bars.push(bar);
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

    /**
     * hilights two bars which are currently being compared
     *
     * @param {Index} a
     * @param {Index} b
     * @memberof Graph
     */
    compare(a, b) {
        this.bars[a].style.backgroundColor = "yellow";
        this.bars[b].style.backgroundColor = "yellow";
    }

    /**
     * This is to unhilight two bars of the graph
     *
     * @param {Index} a
     * @param {Index} b
     * @memberof Graph
     */
    uncompare(a, b) {
        this.bars[a].style.backgroundColor = "red";
        this.bars[b].style.backgroundColor = "red";
    }

    /**
     * This swaps two values in the array with each other
     *
     * @param {Index} a
     * @param {Index} b
     * @memberof Graph
     */
    swap(a, b) {
        let temp = this.array[a];
        this.array[a] = this.array[b];
        this.array[b] = temp;
        let temp_ = this.bars[a];
        this.bars[a] = this.bars[a];
        this.bars[b] = temp_;
    }

    updateArray(from, arr) {
        this.array.splice.apply(this.array, [from, arr.length].concat(arr));
    }

    /**
     * THis is to copy a grahp
     *
     * @static
     * @param {Graph} g
     * @returns
     * @memberof Graph
     */
    static copy(g) {
        return new Graph(g.size, g.dimentions.w, g.dimentions.h, g.root);
    }
}

/**
 * This returne a new DOM Element which has the given id
 *
 * @param {String} tag
 * @param {String} id
 * @returns {DOM Element} DOM Element with assigned id
 */
function createElement(tag, id) {
    const elt = document.createElement(tag);
    elt.id = id;
    return elt;
}
