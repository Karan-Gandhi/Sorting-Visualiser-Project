async function BubbleSort(graph) {
    let arr = graph.array;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let x = 0; x < n; x++) {
            if (arr[x] > arr[x + 1]) {
                graph.compare(x, x + 1);
                graph.swap(x, x + 1);
                await sleep(1);
                graph.showGraph();
                graph.uncompare(x, x + 1);
            }
        }
    }
}

async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
