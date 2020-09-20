function sendMail(contactForm) {
  emailjs
    .send("0happysoup0@gmail.com", "template_yvvj9ks", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      enquiry: contactForm.yourquery.value,
      contact_number: contactForm.contactnumber.value,
    })
    .then(
      function (response) {
        console.log("Success", response);
        alert("Your query has been received, we will be in touch shortly.");
      },
      function (error) {
        console.log("Failed", error);
      }
    );
  return false;
}
