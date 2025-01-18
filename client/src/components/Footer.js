import React from "react"

function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "10px", background: "#f1f1f1"}}>
            <p>@ {new Date().getFullYear()} MilkNet. All  rights reserved.</p>
        </footer>
    );
}

export default Footer;