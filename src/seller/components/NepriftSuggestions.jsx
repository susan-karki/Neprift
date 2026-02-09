import React, { useState } from "react";
import "./NepriftSuggestions.css";

function NepriftSuggestions() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, suggestion });
    setSubmitted(true);
    setName("");
    setEmail("");
    setSuggestion("");
  };

  return (
    <div className="suggestions_container">
      <h1 className="suggestions_title">Your Suggestions</h1>

      {submitted && (
        <p className="submit_message">Thank you! Your suggestion has been received.</p>
      )}

      <form className="suggestions_form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label htmlFor="suggestion">Suggestion</label>
        <textarea 
          id="suggestion" 
          value={suggestion} 
          onChange={(e) => setSuggestion(e.target.value)} 
          rows="5" 
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NepriftSuggestions;
