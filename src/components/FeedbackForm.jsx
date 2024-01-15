import React from 'react';

function FeedbackForm() {
  return (
    <form>
      <label htmlFor="feedback">Leave a Comment:</label>
      <textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;