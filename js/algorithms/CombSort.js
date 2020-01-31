async function CombSort(graph) {
    let gap = graph.size,
        shrink = 1.3,
        sorted = false;

    while (!sorted) {
        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }

        let i = 0;
        while (i + gap < graph.size) {
            if (graph.array[i] > graph.array[i + gap]) {
                graph.compare(i, i + gap);
                graph.swap(i, i + gap);
                await sleep(graph.time);
                graph.showGraph();
                sorted = false;
            }
            i++;
        }
        gap = Math.floor(gap / shrink);
    }
}
