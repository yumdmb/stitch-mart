

const ContactUs = () => {
  return (
    <body className='body'>
      <form className='form'>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <textarea placeholder='Message' />
        <button type='submit'>Submit</button>
      </form>
    </body>
  );
};

export default ContactUs;