
// Sample code to perform I/O:

// KRUSKAL'S ALGORITHM
// BETTER SOLUTION, USING PATH COMPRESSION AND DISJOINT SET

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
    const edges = []

    let distance = 0

    //populate edges 
    for (let i = 1; i <= e; ++i) {
        const x = inputArr[i].split(' ')[0]
        const y = inputArr[i].split(' ')[1]
        const w = inputArr[i].split(' ')[2]
        edges[i] = {src:x, dest:y, weight: w}
    }   

    const sortedEdges = edges.sort((a,b) => {
        return a.weight - b.weight 
    })

    const disjointSet = new UnionFind(v)

    disjointSet.populateSet()
    // process.stdout.write(JSON.stringify(disjointSet));

    sortedEdges.forEach(edge => {
        const x = disjointSet.find(edge.src); 
        const y = disjointSet.find(edge.dest); 
        // here we see if it is disjoint set 
        // if so, we use union to join sets
        if (!disjointSet.connected(x,y)) {
            distance += Number(edge.weight)
            disjointSet.unify(x,y)
        }
    })
    process.stdout.write(JSON.stringify(distance));
   // Writing output to STDOUT
}

function UnionFind(size) {

  // The number of elements in this union find
  this.size = size

  // Used to track the size of each of the component
  this.componentsSize = []

  // id[i] points to the parent of i, if id[i] = i + 1 then i is a root node
  this.id = []

  this.populateSet = function() {
    for (let i = 1; i <= this.size; i++) {
      this.id[i] = i; // Link to itself (self root)
      this.componentsSize[i] = 1; // Each component is originally of size one
    }
  }

  // Find which component/set 'p' belongs to, takes amortized constant time.
  this.find = function(p) {

    // Find the root of the component/set
    let root = p;
    while (root != this.id[root]) root = this.id[root];

    // Compress the path leading back to the root.
    // Doing this operation is called "path compression"
    // and is what gives us amortized time complexity.
    while (p != root) {
      const next = this.id[p];
      this.id[p] = root;
      p = next;
    }

    return root;
  }

  // Return whether or not the elements 'p' and
  // 'q' are in the same components/set.
  this.connected = function(p, q) {
    return this.find(p) == this.find(q);
  }

  // Return the size of the components/set 'p' belongs to
  this.componentSize = function(p) {
    return this.componentsSize[this.find(p)];
  }

  // Unify the components/sets containing elements 'p' and 'q'
  this.unify = function(p, q) {

    // These elements are already in the same group!
    if (this.connected(p, q)) return;

    const root1 = this.find(p);
    const root2 = this.find(q);

    // Merge smaller component/set into the larger one.
    if (this.componentsSize[root1] < this.componentsSize[root2]) {
      this.componentsSize[root2] += this.componentsSize[root1];
      this.id[root1] = root2;
    } else {
      this.componentsSize[root1] += this.componentsSize[root2];
      this.id[root2] = root1;
    }
  }
}
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
