let graph = null;

window.onload = async () => {
    graph = new Graph(500, document.getElementById("root").offsetWidth, document.getElementById("root").offsetHeight - 100, document.getElementById("root"));
    graph.randomise();
    graph.showGraph();
    await MergeSort(graph);
    // await Quicksort(graph, 0, graph.size - 1);
    // await BubbleSort(graph);
};

async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
