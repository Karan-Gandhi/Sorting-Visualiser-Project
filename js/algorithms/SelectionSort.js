async function SelectionSort(graph) {
    let i,
        j,
        n = graph.size;

    for (i = 0; i < n - 1; i++) {
        let jMin = i;
        for (j = i + 1; j < n; j++) {
            if (graph.array[j] < graph.array[jMin]) {
                graph.compare(j, jMin);
                jMin = j;
                await sleep(graph.time);
                graph.uncompare(j, jMin);
            }
        }
        if (jMin !== i) {
            graph.compare(jMin, i);
            graph.swap(i, jMin);
            await sleep(graph.time);
            graph.showGraph();
        }
    }
}
