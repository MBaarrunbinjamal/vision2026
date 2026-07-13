import React, { useState } from "react";

function AddEvent() {

    const [event, setEvent] = useState({
        title: "",
        description: "",
        category: "",
        eventDate: "",
        registrationStart: "",
        registrationEnd: "",
        maxParticipants: "",
        meetingLink: ""
    });

    const handleChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });
    };

    const createEvent = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:7000/api/admin/event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify(event)
        });

        const data = await response.json();

        if (data.success) {
            alert("Event Created Successfully");

            setEvent({
                title: "",
                description: "",
                category: "",
                eventDate: "",
                registrationStart: "",
                registrationEnd: "",
                maxParticipants: "",
                meetingLink: ""
            });
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3>Create Online Event</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={createEvent}>

                        <div className="mb-3">
                            <label>Event Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={event.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Description</label>

                            <textarea
                                className="form-control"
                                rows="4"
                                name="description"
                                value={event.description}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Category</label>

                            <select
                                className="form-control"
                                name="category"
                                value={event.category}
                                onChange={handleChange}
                            >
                                <option value="">Select Category</option>
                                <option value="Workshop">Workshop</option>
                                <option value="Webinar">Webinar</option>
                                <option value="Competition">Competition</option>
                                <option value="Seminar">Seminar</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label>Event Date & Time</label>

                            <input
                                type="datetime-local"
                                className="form-control"
                                name="eventDate"
                                value={event.eventDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Registration Starts</label>

                            <input
                                type="datetime-local"
                                className="form-control"
                                name="registrationStart"
                                value={event.registrationStart}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Registration Ends</label>

                            <input
                                type="datetime-local"
                                className="form-control"
                                name="registrationEnd"
                                value={event.registrationEnd}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Maximum Participants</label>

                            <input
                                type="number"
                                className="form-control"
                                name="maxParticipants"
                                value={event.maxParticipants}
                                onChange={handleChange}
                            />
                        </div>



                        <button
                            className="btn btn-success w-100"
                            type="submit"
                        >
                            Create Event
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AddEvent;