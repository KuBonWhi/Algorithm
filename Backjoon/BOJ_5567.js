let input = [];

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=> {
    input.push(line);
}).on("close", ()=>{
    main();
    process.exit();
});

const main = () => {
    for(let i=0;i<input.length;i++){
        input[i] = input[i].split(" ").map(Number);
    }
    const relation = Array.from(Array(input[0][0]), () => Array(input[0][0]).fill(0));
    const visited = Array(input[0][0]).fill(0);
    //const mainRelation = Array(input[0][0]).fill(0);
    let answer = 0;

    for(let i=2;i<2+input[1][0];i++) {
        let [a, b] = input[i];
        relation[a-1][b-1] = 1;
        relation[b-1][a-1] = 1;
    }

    for(let i=0;i<relation[0].length;i++) {
        if(relation[0][i] === 1) {
            if(visited[i]!==1){
            visited[i] = 1;
            answer++;
            }
            for(let k=1;k<relation[i].length;k++) {
                if(relation[i][k]===1){
                   if(visited[k]!==1){
                    visited[k]=1;
                    answer++;
                  }
            }
            }
        }
    }
    console.log(answer);
}

