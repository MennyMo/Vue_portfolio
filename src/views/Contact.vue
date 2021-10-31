<template>
  <div>
      <section id="contact-section">
      <div class="container">
        <div style="text-align:center">
          <h3>Get In touch with Molly</h3>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div class="row">
          <div class="column">
            <img
              src="https://cdn.glitch.com/f52e27c8-caa7-4caa-9659-2e63dab426c5%2Fundraw_contact_us_15o2.png?v=1630484296868"
              style="width:100%"
            />
          </div>
          <div class="column">
            <form
              id="contact-form"
              action="https://formspree.io/f/xpzkkrpv"
              method="POST"
            >
              <label for="fname">First Name</label>
              <input required
                type="text"
                id="fname"
                name="First Name"
                placeholder="Your name.."
              />
              <label for="lname">Last Name</label>
              <input required
                type="text"
                id="lname"
                name="Last Name"
                placeholder="Your last name.."
              />
              
              <label for="email">Email</label>
              <input required
                type="email"
                id="email"
                name="email"
                placeholder="yourmail@mail.com"
              /> <br>
              
              <label for="country">Country</label>
              <select id="country" name="Country" >
                <option value="Select">Select</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Canada">Canada</option>
                <option value="Usa">USA</option>
                <option value="UK">United Kingdom</option>
              </select>
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="Subject"
                placeholder="Write something..."
                style="height:170px"
              ></textarea>
              <input type="submit" value="Submit" id="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
//   window.addEventListener("DOMContentLoaded", function() {
//   // get the form elements defined in your form HTML above
//   let form = document.getElementById("contact-form");

//   // Success and Error functions for after the form is submitted
//   function success() {
//     form.reset();
//     alert("Thanks for contacting us!");
//   }
//   function error() {
//     alert("Oops! There was a problem.");
//   }

//   // handle the form submission event
//   form.addEventListener("submit", function(ev) {
//     // prevent default redirecting
//     ev.preventDefault();
//     // get the form data using FormData method
//     let data = new FormData(form);
//     // passing in the method i.e. POST, GET; the endpoint, the formdata, success and error functions.
//     sendRequest(form.method, form.action, data, success, error);
//   });
// });

// // helper function for sending an AJAX request

// function sendRequest(method, url, data, success, error) {
//   let xhr = new XMLHttpRequest();
//   // Passing in the api method and the baseurl+endpoint and initializing a request
//   xhr.open(method, url);
//   // setRequestHeader called after the open() and before the send(), takes content-type
//   xhr.setRequestHeader("Accept", "application/json");
//   // readystate attribute of the http request
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     // checking to see response status code if successful call success else error
//     if (xhr.status === 200) {
//       success();
//     } else {
//       error();
//     }
//   };
//   // async by default sends request passing in the form data
//   xhr.send(data);
// }


}
</script>

<style scoped>
#contact-section {
    width: 100vw;
    height: 100vh;
    padding: 10px;
    /*   background-image: url("https://cdn.glitch.com/f52e27c8-caa7-4caa-9659-2e63dab426c5%2Fcontact-us-2355449_1920.jpg?v=1630504903308"); */
  }
  
  #contact-section h2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 65px;
    color: #000;
  }
  
  #contact-section p {
    font-family: Open Sans;
    font-style: 500;
    font-weight: normal;
    font-size: 16px;
    /*   line-height: 65px; */
    color: #000;
  }
  
  #contact-section label {
    font-family: Open Sans;
    font-style: 500;
    font-weight: normal;
    font-size: 16px;
    color: #000;
  }
  
  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    border-radius: 5px;
  }
  
  input[type="submit"] {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #45a049;
  }
  
  /* Style the container/contact section */
  
  /* Create two columns that float next to eachother */
  .column {
    float: left;
    width: 50%;
    margin-top: 6px;
    padding: 20px;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
 
</style>