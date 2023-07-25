import React from "react";


function Contact() {
    return (
<form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Contact Me!</p>

    <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name" required/>

    <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail" required/>

    

    <div class="form-group">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message" required></textarea>
    </div>

   

    <button class="btn btn-info btn-block" type="submit">Send</button>

</form>

    );
  }
  
  export default Contact;
  