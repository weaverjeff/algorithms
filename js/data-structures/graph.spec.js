let Graph = require("./graph");

describe('graph tests', () => {
    it('should create a graph', () => {
        var graph = new Graph();
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addVertex(3);
        graph.addVertex(4);
        graph.addVertex(5);
        graph.addVertex(6);
        graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
        graph.addEdge(1, 2);
        graph.addEdge(1, 5);
        graph.addEdge(2, 3);
        graph.addEdge(2, 5);
        graph.addEdge(3, 4);
        graph.addEdge(4, 5);
        graph.addEdge(4, 6);
        graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4
        console.log('graph size (number of vertices):', graph.size()); // => 6
        console.log('graph relations (number of edges):', graph.relations()); // => 7
        graph.traverseDFS(1, function(vertex) { console.log(vertex); }); // => 1 2 3 4 5 6
        console.log('---');
        graph.traverseBFS(1, function(vertex) { console.log(vertex); }); // => 1 2 5 3 4 6
        graph.traverseDFS(0, function(vertex) { console.log(vertex); }); // => 'Vertex not found'
        graph.traverseBFS(0, function(vertex) { console.log(vertex); }); // => 'Vertex not found'
        console.log('path from 6 to 1:', graph.pathFromTo(6, 1)); // => 6-4-5-1
        console.log('path from 3 to 5:', graph.pathFromTo(3, 5)); // => 3-2-5
        graph.removeEdge(1, 2);
        graph.removeEdge(4, 5);
        graph.removeEdge(10, 11);
        console.log('graph relations (number of edges):', graph.relations()); // => 5
        console.log('path from 6 to 1:', graph.pathFromTo(6, 1)); // => 6-4-3-2-5-1
        graph.addEdge(1, 2);
        graph.addEdge(4, 5);
        console.log('graph relations (number of edges):', graph.relations()); // => 7
        console.log('path from 6 to 1:', graph.pathFromTo(6, 1)); // => 6-4-5-1
        graph.removeVertex(5);
        console.log('graph size (number of vertices):', graph.size()); // => 5
        console.log('graph relations (number of edges):', graph.relations()); // => 4
        console.log('path from 6 to 1:', graph.pathFromTo(6, 1)); // => 6-4-3-2-1
    });
});