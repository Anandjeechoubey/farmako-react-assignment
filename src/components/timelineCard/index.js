import React from 'react'
import Button from '../button'

const TimelineCard = ({date, heading, prescriptionLink, reportLink}) => {
    return (
        <div className="timeline-card">
            <h4>{date}</h4>
            <div>
                <div className="timeline-details">
                    <h2>{heading}</h2>
                    <a href={prescriptionLink}><Button tittle="Prescription" /></a>
                    <a href={reportLink}><Button tittle="Report" /></a>
                    <div className="prescrition-report-preview">
                        preview
                    </div>
                    <h5>{date}</h5>
                </div>
            </div>
        </div>
    )
}

export default TimelineCard
