
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
    const inputArr = input.split('\n')
    const adjecencyList = {}

    for (let i = 1; i < inputArr.length - 1; i++) {
        const a = inputArr[i].split(' ')[0]
        const b = inputArr[i].split(' ')[1]
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

    const headNode = inputArr[inputArr.length - 1][0]
    const stack = []
    const visited = {}
    stack.push(headNode)
    visited[headNode] = true
    let unreachable = inputArr[0].split(' ')[0] - 1

    while(stack.length > 0) {
        const currNode = stack.pop()
        visited[currNode] = true
        if (adjecencyList[currNode]) {
            const neighbors = adjecencyList[currNode]
        
            neighbors.forEach(neighbor => {
                if (!visited[neighbor]) {
                    stack.push(neighbor)
                    visited.neighbor = true
                    unreachable--
                }
            })
        }
    }

    process.stdout.write(String(unreachable)); 
    return 0      // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
