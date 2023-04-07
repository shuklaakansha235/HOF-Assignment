


let checkValidUrl = ((pattern,input)=>{
    if(pattern.test(input)){
        return "valid input"
    }
    return "invalid input";
})

const urlPattern = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]{2,}$/;

let url1 = "https://www.akansha.shukla.com";
let url2 = "http//www.pwskills.com";

console.log(checkValidUrl(urlPattern,url1))
console.log(checkValidUrl(urlPattern,url2));