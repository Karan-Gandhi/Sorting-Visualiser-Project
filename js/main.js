let graph = null;
const algorithms = [BubbleSort, Quicksort, MergeSort, Heapsort, InsertionSort, SelectionSort, ShellSort, CocktailShakerSort];

window.onload = async () => {
    graph = new Graph(500, document.getElementById("root").offsetWidth, document.getElementById("root").offsetHeight - 100, document.getElementById("root"));
    graph.randomise();
    graph.showGraph();

    // await InsertionSort(graph);
    // await Heapsort(graph);
    // await MergeSort(graph);
    // await Quicksort(graph, 0, graph.size - 1);
    // await BubbleSort(graph);
};

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
