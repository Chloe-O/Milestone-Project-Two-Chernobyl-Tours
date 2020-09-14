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
      },
      function (error) {
        console.log("Failed", error);
      }
    );
  return false;
}
