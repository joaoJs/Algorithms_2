
// Sample code to perform I/O:

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
    const edges = input.split('\n')
    const level = edges[edges.length - 1]
    const adjecencyList = {}

    for (let i = 1; i < edges.length - 1; i++) {
        const a = edges[i].split(' ')[0]
        const b = edges[i].split(' ')[1]
        if (adjecencyList[a]) {
            adjecencyList[a].push(b)
        } else {
            adjecencyList[a] = [b]
        }
        if (adjecencyList[b]) {
            adjecencyList[b].push(a)
        } else {
            adjecencyList[b] = [a]
        }
    }

    const queue = []
    const visited = {}

    queue.push(1)
    visited[1] = true
    let counter = 1
    let currLevel = 1
 
    while (queue.length) {
        const currNode = queue.shift()
        counter--
        visited[currNode] = true
        const neighbors = adjecencyList[currNode]
        
        neighbors.forEach(neighbor => {
            if (!visited[neighbor]) {
                queue.push(neighbor)
                visited[neighbor] = true
            }
        })
    

        if (counter === 0) {
            currLevel++
            counter = queue.length
        }

        if (currLevel === Number(level)) {
            process.stdout.write(String(queue.length))
            return 0
        }
    }
    
    //process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
