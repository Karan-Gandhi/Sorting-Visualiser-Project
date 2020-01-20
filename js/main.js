let graph = null;

window.onload = () => {
    graph = new Graph(500, document.getElementById("root").offsetWidth, document.getElementById("root").offsetHeight - 100, document.getElementById("root"));
    graph.randomise();
    graph.showGraph();
};
