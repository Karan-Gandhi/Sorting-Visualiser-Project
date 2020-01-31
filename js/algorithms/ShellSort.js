async function ShellSort(graph) {
    let increment = Math.floor(graph.size / 2),
        n = graph.size;

    while (increment > 0) {
        for (let i = increment; i < n; i++) {
            let j = i,
                temp = graph.array[i];

            while (j >= increment && graph.array[j - increment] > temp) {
                graph.compare(j, j - increment);
                graph.array[j] = graph.array[j - increment];
                j -= increment;
                await sleep(graph.time);
                graph.showGraph();
            }
            graph.array[j] = temp;
            graph.showGraph();
        }

        if (increment == 2) increment = 1;
        else increment = parseInt((increment * 5) / 11);
    }
}
