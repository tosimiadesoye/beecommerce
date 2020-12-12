const Contact = () => {
    return (
      <div>
      <form>
          <h1>Get in Touch</h1>
          <label>First Name</label>
          <input type='text' required/>
          <label>Last Name</label>
          <input type='text' required/>
          <label>Subject</label>
          <input type='text' />
          <label>Message:</label>
          <textarea placeholder='Message' required></textarea>
          <button>Send Message</button>
      </form>
  </div>
    );
  };
  
  export default Contact;