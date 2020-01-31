async function IntroSort(graph, array, depth, index) {
    let maxdepth = depth ? depth : Math.log10(graph.size) * 2;
    let n = array ? array.length : graph.size;
    let arr = array || graph.array;
    let i = index || 0;

    if (n <= 1) return;
    else if ((maxdepth = 0)) HeapSort(graph, array);
    else {
        // let p = await partitionForIntroSort(graph, arr);
        // console.log(p);

        // let left = arr.splice(0, p - 1);
        // let right = arr.splice(p + 1, n);
        // arr.splice.apply(arr, [0, 0].concat(left).concat(right));
        // await IntroSort(graph, left, maxdepth - 1, i);
        // await IntroSort(graph, right, maxdepth - 1, left.length - 1);
        Quicksort(graph, i, n);
    }
}

async function partitionForIntroSort(graph, array) {
    let arr = array ? array : graph.array;
    let pivot = arr[array.length - 1];

    let i = 0;
    for (let j = 0; j < array.length - 1; j++) {
        if (arr[j] < pivot) {
            graph.swap(i, j);
            graph.showGraph();
            graph.compare(j, i);
            await sleep(1);
            // console.log(graph.array);
            i += 1;
        }
    }
    graph.swap(i, array.length - 1);
    return i;
}
