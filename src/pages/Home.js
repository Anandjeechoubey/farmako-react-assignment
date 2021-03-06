import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import TimelineCard from "../components/timelineCard";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main>
        <Navbar />
        <div className="patient-details">
          <section id="patient-info">
            <div>
              <div>
                <span>Name</span>: Aman Bhandula
              </div>
              <div>
                <span>Age</span>: 22
              </div>
            </div>
            <div>
              <div>
                <span>Patient ID</span>: FH-101010
              </div>
              <div>
                <span>Gender</span>: Male
              </div>
            </div>
          </section>
          <section id="medical-history">
            <h2>Medical History</h2>
            <TimelineCard
              date="Sept, 2020"
              heading="Back Pain Record"
              prescriptionLink="#"
              reportLink="#"
            />
            <TimelineCard
              date="Sept, 2020"
              heading="Back Pain Record"
              prescriptionLink="#"
              reportLink="#"
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
