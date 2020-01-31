async function InsertionSort(graph) {
    let i = 1;
    let arr = graph.array;

    while (i < graph.size) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            graph.swap(j, j - 1);
            graph.compare(j, j - 1);
            await sleep(graph.time);
            graph.showGraph();
            j--;
        }
        i++;
    }
}
