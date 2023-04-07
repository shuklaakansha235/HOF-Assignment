

const input = "Bhabesh Bharali";

let reverse = (str) =>{
    let reverse = "";
    for(let i = str.length-1; i >=0; i--){
        reverse += str[i];
    }
    return reverse;
}

setTimeout(()=>{
    let result = reverse(input);
    console.log(result);
},2000);