let graph = null;
const algorithms = [BubbleSort, Quicksort, MergeSort, Heapsort, InsertionSort, SelectionSort, ShellSort, CocktailShakerSort, CombSort, GnomeSort, OddEvenSort];

window.onload = async () => {
    graph = new Graph(500, document.getElementById("root").offsetWidth, document.getElementById("root").offsetHeight - 100, document.getElementById("root"));
    graph.randomise();
    graph.showGraph();
};

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
