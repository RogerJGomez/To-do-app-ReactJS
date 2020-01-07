import React from 'react'

export default function Header() {
    const styles={
        backgroundColor: "#08C873",
        color: "#fff",
        paddingTop:"10px",
        paddingBottom:"10px",
        textAlign: "center",
        fontSize:"25px"
    }

    return(
        <nav style={styles} className="navbar">
           <h3>To do App</h3>
        </nav>
    )
}
