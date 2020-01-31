async function OddEvenSort(graph) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 1; i < graph.size - 1; i++) {
            if (graph.array[i] > graph.array[i + 1]) {
                graph.compare(i, i + 1);
                graph.swap(i, i + 1);
                await sleep(graph.time);
                graph.showGraph();
                sorted = false;
            }
        }

        for (let i = 0; i < graph.size - 1; i++) {
            if (graph.array[i] > graph.array[i + 1]) {
                graph.compare(i, i + 1);
                graph.swap(i, i + 1);
                await sleep(graph.time);
                graph.showGraph();
                sorted = false;
            }
        }
    }
}
