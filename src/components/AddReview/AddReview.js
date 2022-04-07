import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './AddReview.css';

const ReviewText = () => {
  return (
    <p >Your review has been successfully sent .Thank you</p>
  )
}

const AddReview = () => {

  const nameRef = useRef();
  const ratingRef = useRef();
  const commentRef = useRef();
  const { user } = useAuth();

  const [reviewText, setreviewText] = useState(false);


  const handleAddUser = e => {

    const name = nameRef.current.value;
    const review = ratingRef.current.value;
    const comment = commentRef.current.value;




    const newreview = { name, review, comment, user }
    // const newreview.user = user;

    fetch('https://stark-stream-58994.herokuapp.com/reviews', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(newreview)
    })

      .then(res => res.json())
      .then(data => {
        if (data > 0) {
          alert('successfully added new review');
          e.target.reset();
        }
      })
    e.preventDefault();

    e.target.reset();
    setreviewText(true);
  }

  //hide review 

  setTimeout(() => {
    setreviewText(false);
  }, 4000)
  return (

    <div className="container mt-4 mb-4">
      <h4 className="text-center">Share your experience with us</h4>
      <div className="row mb-4">

        <div className="col-md-3"></div>
        <div className="col-md-6 shadow">
          <Form onSubmit={handleAddUser}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="Text"
                placeholder="name@example.com"
                ref={nameRef}
              />
              <label htmlFor="floatingInputCustom">Write your Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Password"
                ref={ratingRef}


              />



              <label htmlFor="floatingPasswordCustom">Share your experience feedback (0 - 5) </label>
            </Form.Floating>

            <Form.Floating className="mb-3">

              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="text"
                ref={commentRef}
              />
              <label htmlFor="floatingPasswordCustom">Write your comment about work experience </label>
            </Form.Floating>

            <input to='/addreview' type="submit" value="Submit" className="btn btn-primary btn-submit p-2 w-50 mb-3" />
          </Form>

          <div className='row'>
            {reviewText ? <ReviewText /> : null}

          </div>

        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default AddReview;