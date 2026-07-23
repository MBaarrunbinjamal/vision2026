import { useState } from "react";
import "./EventRegistration.css";

function EventRegistration({ event, onClose }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:7000/api/registerEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token")
            },
            body: JSON.stringify({
                eventId: event._id,
                ...form
            })
        });

        const data = await response.json();

        alert(data.message);

        if(data.success){
            onClose();
        }
    };

    return (

        <div className="modal-overlay">

            <div className="modal-box">

                <h2>{event.title}</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Register
                    </button>

                    <button
                        type="button"
                        onClick={onClose}
                    >
                        Cancel  ✕
                    </button>

                </form>

            </div>

        </div>

    );
}

export default EventRegistration;