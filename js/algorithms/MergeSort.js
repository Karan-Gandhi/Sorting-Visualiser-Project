// function MergeSort(graph, n) {
//     let arr = graph.array;
//     if (n > 1) {
//         let mid = Math.ceil(n + 1 / 2);
//         let l = getElements(arr, 0, mid);
//         let r = getElements(arr, mid, n);

//         let graph_ = Graph.copy(graph);
//         console.log(l);
//         console.log(r);

//         graph_.array = l;
//         MergeSort(graph_, l.length);

//         graph_.array = r;
//         MergeSort(graph_, r.length);

//         let i = 0,
//             j = 0,
//             k = 0;

//         while (i < l.length && j < r.length) {
//             if (l[i] < r[j]) {
//                 arr[k] = l[i];
//                 graph.showGraph();
//                 i++;
//             } else {
//                 arr[k] = r[j];
//                 graph.showGraph();
//                 j++;
//             }
//             k++;
//         }

//         while (i < l.length) {
//             arr[k] = l[i];
//             graph.showGraph();
//             i++;
//             k++;
//         }

//         while (j < r.length) {
//             arr[k] = r[j];
//             graph.showGraph();
//             j++;
//             k++;
//         }
//     }
// }

// function getElements(arr, a, b) {
//     let rarr = [];
//     for (let i = a; i < b; i++) {
//         rarr.push(arr[i]);
//     }
//     return rarr;
// }

// function MergeSort(graph, n, r) {
//     if (n < 2) return;
//     TopDownMergeSort(graph.array, n, r, graph.array);
// }

// function TopDownMergeSort(arr, n, r, c) {
//     let mid = Math.round((n + 1) / 2);
//     if (mid > 1) TopDownMergeSort(arr, mid, n, a);
//     if (n - mid > 1) TopDownMergeSort();
// }

function MergeSort(graph, arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const l = arr.slice(0, mid);
    const r = arr.slice(mid, 0);

    return merge(graph, MergeSort(graph, l), MergeSort(graph, r));
}

function merge(graph, l, r) {
    let result = [],
        lindex = 0,
        rindex = 0;
}
