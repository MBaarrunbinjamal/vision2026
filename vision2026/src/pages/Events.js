import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventDetails() {

    const { id } = useParams();

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEvent();
    }, []);

    const getEvent = async () => {

        const response = await fetch(`http://localhost:7000/api/event/${id}`);

        const data = await response.json();

        setEvent(data.record);
        setLoading(false);
    };

    const registerEvent = async () => {

        const response = await fetch("http://localhost:7000/api/event/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            },

            body: JSON.stringify({
                eventId: id
            })

        });

        const data = await response.json();

        alert(data.message);

        if(data.success){
            getEvent();
        }

    };

    if(loading){
        return <h2>Loading...</h2>;
    }

    const now = new Date();

    const start = new Date(event.registrationStart);

    const end = new Date(event.registrationEnd);

    const registrationOpen =
        now >= start &&
        now <= end &&
        event.registrationEnabled;

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2>{event.title}</h2>

                    <p>{event.description}</p>

                    <p>
                        <b>Category:</b> {event.category}
                    </p>

                    <p>
                        <b>Event Date:</b> {event.eventDate}
                    </p>

                    <p>
                        <b>Registration Ends:</b> {event.registrationEnd}
                    </p>

                    <p>
                        <b>Participants:</b> {event.currentParticipants} / {event.maxParticipants}
                    </p>

                    {
                        registrationOpen ?

                        <button
                            className="btn btn-success"
                            onClick={registerEvent}
                        >
                            Register Now
                        </button>

                        :

                        <button
                            className="btn btn-danger"
                            disabled
                        >
                            Registration Closed
                        </button>

                    }

                </div>

            </div>

        </div>

    );

}

export default EventDetails;