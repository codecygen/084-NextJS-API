import { useRef } from "react";

const HomePage = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail ,text: enteredFeedback }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    console.log(data);

    // Alternatively
    // fetch().then(res => res.json()).then(data => console.log(data))
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button>Send</button>
      </form>
    </div>
  );
}

export default HomePage;
