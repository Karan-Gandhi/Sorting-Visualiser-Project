async function Heapsort(graph, count) {
    let n = count || graph.size;
    let end = n - 1;
    await buildMaxHeap(graph, n);
    while (end > 0) {
        graph.compare(end, 0);
        graph.swap(end, 0);
        await sleep(graph.time);
        graph.showGraph();
        end--;
        await siftDown(graph, 0, end);
    }
}

async function buildMaxHeap(graph, count) {
    let start = iParent(count - 1);
    while (start >= 0) {
        await siftDown(graph, start, count - 1);
        start--;
    }
}

async function siftDown(graph, start, end) {
    let root = start;
    let child = 0;
    let swap = 0;
    let arr = graph.array;
    let color = getRandomColor();
    while (iLeftChild(root) <= end) {
        child = iLeftChild(root);
        swap = root;
        if (arr[swap] < arr[child]) swap = child;
        if (child + 1 <= end && arr[swap] < arr[child + 1]) swap = child + 1;
        if (swap === root) return;
        else {
            graph.compare(root, swap);
            graph.swap(root, swap);
            await sleep(graph.time);
            graph.showGraph();
            root = swap;
        }
    }
}

function iParent(i) {
    return Math.floor((i - 1) / 2);
}

function iLeftChild(i) {
    return 2 * i + 1;
}

function iRightChild(i) {
    return 2 * i + 2;
}
