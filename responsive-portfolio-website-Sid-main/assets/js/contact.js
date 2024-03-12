/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publickey

    emailjs.sendForm('service_za0z3wi','template_cxbqvvi','#contact-form','TxrhMn9LHZ_w1XLBj')
       .then(() => {
        // show send message
        contactMessage.textContent = 'Message sent successfully ✅'

           // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // clear input fields
            contactForm.reset()
       }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
       }) 
}

contactForm.addEventListener('submit', sendEmail)