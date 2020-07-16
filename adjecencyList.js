
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
    let currIndex = 0
    const nm = inputArr[currIndex++]
    const n = nm.split(' ')[0]
    const m = nm.split(' ')[1]
    const adjecencyList = {}

    //populate adjecencyList
    for (let i = 0; i < m; i++) {
        const ab = inputArr[currIndex++]
        const a = ab.split(' ')[0]
        const b = ab.split(' ')[1]
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

    // number of queries
    const q = inputArr[currIndex++]
    let result = ''

    for (let i = 0; i < q; i++) {
        const ab = inputArr[currIndex++]
        const a = ab.split(' ')[0]
        const b = ab.split(' ')[1]
        if (adjecencyList[a].includes(b)) { // || adjecencyList[b].includes(a)
            result += 'YES\n'
        } else {
            result += 'NO\n'
        }
    }
    process.stdout.write(result);       // Writing output to STDOUT
}

