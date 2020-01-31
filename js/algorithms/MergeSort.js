async function MergeSort(graph, arr, i) {
    let unsortedArray = arr || graph.array,
        index = i || 0;

    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    const l = await MergeSort(graph, left, index);
    const r = await MergeSort(graph, right, index + left.length);

    const mergedArray = await merge(graph, l, r, index);
    graph.updateArray(index, mergedArray);
    return mergedArray;
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
        graph.updateArray(i, resultArray);
        await sleep(graph.time);
        graph.showGraph();
    }

    resultArray = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    graph.updateArray(i, resultArray);

    return resultArray;
}
