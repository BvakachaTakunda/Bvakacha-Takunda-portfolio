import React from 'react';
import './contact.css';  

const GetInTouch = () => {
  return (
    <div className="co-container">
      <h2 className="lastheading">Get In Touch</h2>
      <p className="lastparagraph">
        I’m always on the lookout for new opportunities, and my inbox is open
        for all. If you’re considering my contribution, have a question, or
        just want to say hi, you can count on hearing back from me!
      </p>
      <a
        href="mailto:takundabvax@gmail.com"  
        className="button-co"
        target="_blank"
        rel="noopener noreferrer"
      >
        📧 Email Me
      </a>
      <p className="footer">
        Based on <strong>Bvakacha Takunda's website</strong>. Coded in <strong>Visual Studio Code</strong>. Built with React.
      </p>
    </div>
  );
};

export default GetInTouch;
