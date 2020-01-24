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

async function MergeSort(graph, unsortedArray, index) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    const l = await MergeSort(graph, left, index);
    const r = await MergeSort(graph, right, index + left.length);

    return await merge(graph, l, r, index);
}

async function merge(graph, left, right, i) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        graph.compare(leftIndex + i, rightIndex + i);
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
        await sleep(100);
        graph.updateArray(i, resultArray.length + i, resultArray);
        console.log(resultArray);

        graph.showGraph();
    }

    resultArray = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    // graph.array = resultArray;
    // graph.updateArray(i, resultArray);
    // graph.showGraph();
    // await sleep(100);

    return resultArray;
}
