import React, { useState } from "react";




function AddEvent() {

  const [event, setEvent] = useState({
    title: "",
    description: "",
    venue: "",
    category: "",
    eventDate: "",
    registrationStart: "",
    registrationEnd: "",
    eventTime: "",
    maxParticipants: "",
    organizer: "",
    image: ""
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(event);

    
   fetch("http://localhost:7000/api/addEvent", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token")
  },
  body: JSON.stringify(event)
});
    

    alert("Event Created Successfully");
  };

  return (
   
    <div className="container mt-1">
     <h1 className=" mb-4">Add Event Page</h1>

      <div className="card shadow p-4">
     
    

        <h2 className="text-center mb-4">Create New Event</h2>
         
 
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Event Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
          </div>

      

          <div className="mb-3">
            <label>Category</label>
            <select
              name="category"
              className="form-control"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option>Workshop</option>
              <option>Seminar</option>
              <option>Competition</option>
              <option>Conference</option>
              <option>Sports</option>
              <option>Cultural</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Event Date</label>
            <input
              type="date"
              name="eventDate"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Event Time</label>
            <input
              type="time"
              name="eventTime"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Registration Start Date</label>
            <input
              type="date"
              name="registrationStart"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Registration End Date</label>
            <input
              type="date"
              name="registrationEnd"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Maximum Participants</label>
            <input
              type="number"
              name="maxParticipants"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Organizer Name</label>
            <input
              type="text"
              name="organizer"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Event Image URL</label>
            <input
              type="text"
              name="image"
              className="form-control"
              placeholder="https://example.com/image.jpg"
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100">
            Create Event
          </button>

        </form>

      </div>

    </div>
  );
}





export default AddEvent;