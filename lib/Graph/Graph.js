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
     * @param {Integer || Graph} size
     * @param {Double} width
     * @param {Double} height
     * @param {DOM Element} root
     * @memberof Graph
     */
    constructor(size, width, height, root) {
        if (size instanceof Graph) {
            this.array = size.array;
            this.bars = size.bars;
            this.size = size.size;
            this.dimentions = size.dimentions;
            this.time = size.time;
            if (size.root) this.root = size.root;
        } else {
            this.array = [];
            for (let i = 0; i < size; i++) {
                this.array.push(0);
            }
            this.size = size;
            this.dimentions = {
                w: width,
                h: height
            };
            if (root) this.root = root;
            this.bars = [];
            this.time = this.size < 100 ? 100 : this.size < 250 ? 20 : 1;
        }
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
        if (this.root) {
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
    }

    /**
     * highlights two bars which are currently being compared
     *
     * @param {Index} a
     * @param {Index} b
     * @memberof Graph
     */
    compare(a, b) {
        if (this.root) this.bars[a].style.backgroundColor = "yellow";
        if (this.root) this.bars[b].style.backgroundColor = "yellow";
    }

    /**
     * Activates the given bars form a specific index to a specific index with the specific color
     *
     * @param {Index} a
     * @param {Index} b
     * @param {String} color
     * @returns
     * @memberof Graph
     */
    activate(a, b, color) {
        if (this.array[a] && this.array[b]) {
            for (let i = a; i <= b; i++) {
                this.bars[i].style.backgroundColor = color;
            }
        } else {
            return;
        }
    }

    /**
     * This is to unhilight two bars of the graph
     *
     * @param {Index} a
     * @param {Index} b
     * @memberof Graph
     */
    uncompare(a, b) {
        if (this.root) {
            this.bars[a].style.backgroundColor = "red";
            this.bars[b].style.backgroundColor = "red";
        }
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

    /**
     * This will update the array of the graph to the given array from a specific index
     *
     * @param {Index} from
     * @param {array} arr
     * @memberof Graph
     */
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
        return new Graph(g);
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
