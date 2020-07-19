process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                              
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const inputArr = input.split('\n')
    let currIndex = 0
    const n = inputArr[currIndex].split(' ')[0]
    const e = inputArr[currIndex++].split(' ')[1]

    const adjecencyList = {}

    for (let i = 0; i < e; i++) {
        const a = inputArr[currIndex].split(' ')[0]
        const b = inputArr[currIndex++].split(' ')[1]

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

    const m = inputArr[currIndex++]

    let result = ''
    for (let i = 0; i < m; i++) {
        const x = inputArr[currIndex].split(' ')[0]
        const dist = inputArr[currIndex++].split(' ')[1]
        
        const queue = []
        const visited = {}
        queue.push(x)
        visited[x] = true
        let count = 1
        let level = 0

        while(queue.length) {
            const current = queue.shift()
            const neighbors = adjecencyList[current]
        
            count--

            neighbors.forEach(neighbor => {
                if (!visited[neighbor]) {
                    queue.push(neighbor)
                    visited[neighbor] = true
                }
            })

            if (count === 0) {
                count += queue.length
                level++
            }

            if (String(level) == dist) {
                break
            }
        }
        result += `${count}\n`
        count = 1
    }
    process.stdout.write(result)
}

