//https://www.youtube.com/watch?v=wu0ckYkltus
//https://www.youtube.com/watch?v=bIA8HEEUxZI
// breadth-first search

let bfs = (graph, root) => {
    var nodesLen = {};

    for(var i = 0; i < graph.length; i++) {
        nodesLen[i]= Infinity;
    }
    nodesLen[root] = 0;
    var queue = [root];
    var current;
    while (queue.length != 0) {
        current = queue.shift();

        let curConnected = graph[current];
        var neighborIdx = [];
        var idx = curConnected.indexOf(1);
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }
        for(let j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] === Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
}

module.exports = bfs;