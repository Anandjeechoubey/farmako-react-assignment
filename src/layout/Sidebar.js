import React from 'react'
import logoDark from '../assets/images/logoAndText.dark.svg'

const Patients = [
    {
        name: 'Aman Bhandula',
    },
    {
        name: 'Aman Bhandula',
    },
    {
        name: 'Aman Bhandula',
    },
    {
        name: 'Aman Bhandula',
    }
];

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <section className="logo">
                <img src={logoDark} alt="logo" />
            </section>
            <section className="patient-list">
                <h2>Today's Patients</h2>
                {Patients.map((patient, index) => (<div key={index}><span className="serial">{index + 1}</span><span>{patient.name}</span></div>))}
            </section>
        </div>
    )
}

export default Sidebar
