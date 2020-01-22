let graph = null;

window.onload = async () => {
    graph = new Graph(50, document.getElementById("root").offsetWidth, document.getElementById("root").offsetHeight - 100, document.getElementById("root"));
    graph.randomise();
    graph.showGraph();
    await BubbleSort(graph);
};
