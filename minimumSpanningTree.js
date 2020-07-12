
// Sample code to perform I/O:

// THIS VERSION IS NOT OPTIMIZED AND DOES NOT USE PATH COMPRESSION

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const inputArr = input.split('\n')
    const v = inputArr[0].split(' ')[0]
    const e = inputArr[0].split(' ')[1]
    const edges = [{src:-1,dest:-1,weight:-1}]
    const parents = [-2]
    let distance = 0

    //populate edges 
    for (let i = 1; i <= e; ++i) {
        const x = inputArr[i].split(' ')[0]
        const y = inputArr[i].split(' ')[1]
        const w = inputArr[i].split(' ')[2]
        edges[i] = {src:x, dest:y, weight: w} // for adding weight -> {w: {src: x, src: y}}
    }

    for (let i = 1; i <= v; ++i) {
        parents[i] = -1
    }

    const sortedEdges = edges.sort((a,b) => {
        return a.weight - b.weight 
    })

    sortedEdges.forEach(edge => {
        if (edge.weight > 0) {
            const x = find(parents, edge.src); 
            const y = find(parents, edge.dest); 
            // here we see if it is disjoint set 
            // if so, we use union to join sets
            if (!isFromTheSameSet(parents,x,y)) {
                distance += Number(edge.weight)
                union(parents,x,y)
            }
        }
    })
    process.stdout.write(JSON.stringify(distance));
   // Writing output to STDOUT
}

const isFromTheSameSet = (parents,x,y) => {
    if (x == y) {
        return true
    } else {
        return false
    }
}

const find = (parents, i) => {
    // parents is an array with the number of elements in that dataset
    if (parents[i] == -1) {
        return i; 
    }
    // recursively looks for parents
    return find(parents, parents[i]); 
}

const union = (parents, x, y) => {
    // we get array of parentss again and look for parents of x and y
    const xset = find(parents, x); 
    const yset = find(parents, y); 
    parents[xset] = yset; 
}
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
