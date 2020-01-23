async function Quicksort(graph, lo, hi) {
    if (lo < hi) {
        // graph.active(lo, hi);
        let p = await partition(graph, lo, hi);
        await Quicksort(graph, lo, p - 1);
        await Quicksort(graph, p + 1, hi);
    }
}

async function partition(graph, lo, hi) {
    let arr = graph.array;
    let pivot = arr[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
        if (arr[j] < pivot) {
            graph.swap(i, j);
            graph.showGraph();
            graph.compare(j, i);
            await sleep(1);
            graph.uncompare(j, hi);
            i += 1;
        }
    }
    graph.swap(i, hi);
    return i;
}
