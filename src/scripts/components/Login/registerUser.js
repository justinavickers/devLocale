import userAPIfunctions from "./fetching"
// import loginUser from "./login"
   function registerUser(){
     let obj={
       email: document.querySelector("#email").value,
       password: document.querySelector("#passwordRegister").value,
       firstName: document.querySelector("#firstName").value,
       lastName:  document.querySelector("#lastName").value

         }
   console.log(obj)
   userAPIfunctions.postUser(obj)
   .then((response)=>response.json()
  //  .then((user)=> loginUser(user))
   )
}
export default registerUser