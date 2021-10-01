const input = [];


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=>{
    input.push(line);
}).on("close", ()=>{
    main();
    process.exit();
});


const main = () => {
    let n = input[0].split(" ").map(Number);
    n = n[0];
    const list = input[1].split(" ").map(Number);
    const array = Array(n).fill(0);
    let answer = "";

    for(let i =0;i<n;i++){
        let tmp = list[i];
        let count = 0;

        for(let k=0;k<n;k++){
            if(count===tmp && array[k] ===0){
                array[k] = i+1;
                break;
            }
            else if(array[k] === 0) {
                count +=1;
            }

        }
    }

    answer = array.join(" ");
    console.log(answer);
}