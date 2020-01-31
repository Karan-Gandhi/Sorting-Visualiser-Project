async function GnomeSort(graph) {
    let pos = 0;

    while (pos < graph.size) {
        if (pos === 0 || graph.array[pos] >= graph.array[pos - 1]) {
            pos++;
        } else {
            graph.compare(pos, pos - 1);
            graph.swap(pos, pos - 1);
            await sleep(graph.time);
            graph.showGraph();
            pos--;
        }
    }
}
