let bfs = require("./bfs");

describe('breadth first graph search', () => {
    it('should get the right counts', () => {
        let graph = [
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0]
        ];

        let result = bfs(graph, 1);
        console.log(result);
        expect(result).toEqual({'0': 2, '1': 0, '2': 1, '3': 3, '4': Infinity});
    });
});