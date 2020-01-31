async function CocktailShakerSort(graph) {
    let swapped = false;
    do {
        for (let i = 0; i <= graph.size - 2; i++) {
            graph.compare(i, i + 1);
            if (graph.array[i] > graph.array[i + 1]) {
                graph.swap(i, i + 1);
                await sleep(graph.time);
                graph.showGraph();
                swapped = true;
            }
        }
        if (!swapped) return;
        swapped = false;
        for (let i = graph.size - 2; i >= 0; i--) {
            graph.compare(i, i + 1);
            if (graph.array[i] > graph.array[i + 1]) {
                graph.swap(i, i + 1);
                await sleep(graph.time);
                graph.showGraph();
                swapped = true;
            }
        }
    } while (swapped);
}
