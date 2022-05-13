// const graph = {
//     A: ["B", "C"],
//     B: ["A", "D"],
//     C: ["A", "G", "H", "I"],
//     D: ["B", "E", "F"],
//     E: ["D"],
//     F: ["D"],
//     G: ["C"],
//     H: ["C"],
//     I: ["C", "J"],
//     J: ["I"]
//   };


// const DFS = (node) => { //node = key
//     let stack = [];
//     let isVisited = [];

//     stack.push(node);

//     while(stack.length !=0 ) {//push 뒤에데이터 pop 맨뒤에 데이터를 반환하고삭제
//         const tempNode = stack.pop();
//         if (! isVisited.includes(tempNode)){
//             //노드가 탐색이되지않았다
//             isVisited.push(tempNode);

//             for (let i = 0; i < graph[tempNode].length; i++){
//                 if (! isVisited.includes (graph[tempNode] [i]))
//                 stack.push(graph[tempNode][i]);

//             }
//             console.log(stack)
//             stack.push(tempNode);
//         }
//     }
//     return isVisited;
// }

// console.log(DFS('A'));
const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D", "G"],
    G: ["C", "B", "F"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
  };


const BFS = (node) => {
        let stack = [];
    let isVisited = [];

    stack.push(node);

    while(stack.length !=0) {
        const tempNode = stack.pop();
        
        if(!isVisited.includes(tempNode)){
            isVisited.push(tempNode);

            for(let i=0; i < graph[tempNode].length; i--){
                if(!isVisited.includes(graph[tempNode][i])){
                    stack.push(graph[tempNode][i]);
                }
                // console.log(stack)
                stack.push(tempNode)
            }
        }
    }
    return isVisited
}
console.log(BFS('A'));

  /*

  
                    a

            b               c

        d               g   h   i
        
    e       f                      j

    [
  'A', 'C', 'I', 'J',
  'H', 'G', 'B', 'D',
  'F', 'E'
]
  */