import userAPIfunctions from "./fetching"
import hideDiv from "./classChanger"

   function registerUser(){
     sessionStorage.clear()
     let obj={
       email: document.querySelector("#email").value,
       password: document.querySelector("#passwordRegister").value,
       firstName: document.querySelector("#firstName").value,
       lastName:  document.querySelector("#lastName").value

         }
   console.log(obj)
   userAPIfunctions.postUser(obj)
   .then((response)=>response.json()
   )
   hideDiv.hideLoginDiv()
   hideDiv.hideRegisterDiv()
   hideDiv.toggleLogoutDiv()
  //  hideDiv.toggleSearchBoxDiv()
}
export default registerUser