import React from 'react';
import { Chip, Button } from '@material-ui/core';
import { ScheduleDetails }  from './components';
import './Schedule.scss';

const Schedule = () => {
    return (
        <div className="schedule" >
            <div className="schedule__container">
                <div className="schedule__info">
                    <div className="schedule__info__today"> Today&nbsp; Schedule</div>
                    <Chip label="Group A" color="primary" className="schedule__info__group-name"/>
                    <div className="schedule__info__work-choice"> Work From Office</div>
                </div>
                <Button variant="contained" className="schedule__change-btn">
                    Change
                </Button>
            </div>
            <ScheduleDetails />
        </div>
    )
};

export default Schedule;
