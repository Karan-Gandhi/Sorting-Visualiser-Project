let graph = null;

window.onload = () => {
    graph = new Graph(10, document.getElementById("root").offsetWidth, document.getElementById("root").offsetHeight - 100, document.getElementById("root"));
    graph.randomise();
    graph.show();
};
