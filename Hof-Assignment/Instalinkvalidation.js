

let instaProfileLinkValiDation = ((pattern, input)=>{
    if(pattern.test(input)){
        return "valid profile";
    }
    return "invalid profile";
});

let urlPattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

console.log(instaProfileLinkValiDation(urlPattern,"https://www.linkedin.com/in/bhbaesh123"));//valid
console.log(instaProfileLinkValiDation(urlPattern,"https://www.linkedin.com/in/bhabesh-123"));//valid
console.log(instaProfileLinkValiDation(urlPattern,"https://www.linkedin.com/in/bhabesh_123"));// valid
console.log(instaProfileLinkValiDation(urlPattern,"https://www.linkedin.com/in/bhabesh_123!"));// invalid
console.log(instaProfileLinkValiDation(urlPattern,"https://www.linkedin.com/in/bhabesh_12337482012t39-0e1295305837"));//more than 30 char
console.log(instaProfileLinkValiDation(urlPattern,"https://www.linkedin.com/in/bhab"));//less than 5 char
console.log(instaProfileLinkValiDation(urlPattern,"https://www.linkedin.com/in/bhab_1234t39-0e"));// valid