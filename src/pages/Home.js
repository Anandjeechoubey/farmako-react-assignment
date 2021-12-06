import React from 'react'
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'

const Home = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <main>
                <Navbar />
                <div className="patient-details">
                    <section className="patient-info">
                        <div>
                            <div><span>Name</span>: Aman Bhandula</div>
                            <div><span>Age</span>: 22</div>
                        </div>
                        <div>
                            <div><span>Patient ID</span>: FH-101010</div>
                            <div><span>Gender</span>: Male</div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Home
