const ContactSection = /*html*/ `
  <section id="contactsec">
    <div class="wrapper">
      <h1 id="contact">CONTACT ME</h1>
      <div class="dash"></div>
      <p>Email: haooo.wu@gmail.com</p>
      <form action="https://formspree.io/f/haooo.wu@gmail.com" method="POST">
        <p><label for="contact_name">NAME</label><span>*</span></p>
        <input type="text" id="contact_name" name="name" required />
        <p><label for="contact_email">E-MAIL</label><span>*</span></p>
        <input name="email" type="email" id="contact_email" required />
        <p><label for="contact_subject">SUBJECT</label><span>*</span></p>
        <input name="subject" id="contact_subject" type="text" required />
        <p><label for="contact_message">MESSAGE</label><span>*</span></p>
        <textarea name="message" id="contact_message" cols="30" rows="10" required></textarea>
        <button value="Send">submit</button>
      </form>
    </div>
  </section>
`;

export default ContactSection;
