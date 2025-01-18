import React, { useState } from "react"; 
import axios from "axios";

function WailistForm() {
    const [formData, setFormData] = useState({ name: "", email: "", role: "consumer" });
    const [message, setMessage] = useState("");

    const handleChane = (e) => {
        const { name, value } = e.target;
        setFormData((prev)) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with actual API endpoint for handling form submissions
            await axios.post("https://api.milknet.com/waitlist", formData);
            setMessage("Thank you for signing up! Stay tuned.");
        } catch (error) {
            setMessage("Oops! Something went wrong. Please try again.");
        }
    };

    return (
        <section style={{ textAlign: "center", padding: "20px" }}>
            <h2>Join the waitlist</h2>
            <form onSubmit={handleSubmit} style={{ display: "inlibe-block", textAlign: "left" }}>
                <lablel>
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </lablel>
                <br />
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value="forrmDa"

                </label>
            </form>
        </section>
    )
}  