let myobj={
  name:"pathum"
}

const myobj2=myobj;
myobj2.name="kamal";

console.log("Value is ",myobj);
//output is kamal
//reason : object reference is store in same place in ram
