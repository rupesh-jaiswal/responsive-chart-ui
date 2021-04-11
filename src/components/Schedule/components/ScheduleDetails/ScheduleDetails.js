import React, { useState, useEffect } from 'react';
import { IconButton  } from '@material-ui/core';
import {
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon,
    AccountBalance as AccountBalanceIcon,
    DirectionsBike as DirectionsBikeIcon,
    ViewAgenda as ViewAgendaIcon,
 } from '@material-ui/icons';

import './ScheduleDetails.scss';
import Charts from '../../../Charts/Charts';

const ScheduleDetails = () => {
    const [expanded, setExpanded] = useState(true);
    const [ amenities, setAmenities ] = useState([]);

    useEffect(() => {
        const amentiesList = [
            {
                icon: <AccountBalanceIcon size="large" />,
                name: 'Desk',
                value: 'Floor 9, Fin-AB-64',
            },
            {
                icon: <DirectionsBikeIcon size="large"  />,
                name: 'Cycle Stand',
                value: '4',
            },
            {
                icon: <ViewAgendaIcon size="large"  />,
                name: 'Locker',
                value: '26',
            }];
        setAmenities(amentiesList);
    }, [])
    return (
        <div className="schedule-details" >
            <div className="schedule-details__title">
                <span> Details </span>
                <IconButton aria-label="toggle"  size="medium" onClick={() => setExpanded(!expanded)}>
                    {expanded ? <KeyboardArrowUpIcon fontSize="inherit" />: <KeyboardArrowDownIcon fontSize="inherit" />}
                </IconButton>
            </div>
            {expanded && (
                <div className="schedule-details__expanded-content">
                    <ul className="schedule-details__list no-list-style" >
                        <li className="schedule-details__list-item">
                            <div className="schedule-details__list-item-title">
                                OFFICE ADDRESS
                            </div>
                            <div className="schedule-details__list-item-body">
                                Kimberly Gardens, London
                            </div>
                        </li>
                        <li className="schedule-details__list-item">
                            <div className="schedule-details__list-item-title">
                                AMENITIES
                            </div>
                            <div className="schedule-details__list-item-body">
                                <ul className="schedule-details__amenities-list no-list-style">
                                    {amenities.map(({ name, value, icon}) => (
                                        <li
                                            className="schedule-details__amenities-list__item"
                                        key={name}
                                        >
                                            {icon}
                                            <div>
                                                <span className="schedule-details__amenities-list__item__name">
                                                    {name} {' # '}
                                                </span>
                                                <span className="schedule-details__amenities-list__item__count">
                                                    {value}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>
                        </li>
                        <li className="schedule-details__list-item">
                            <div className="schedule-details__list-item-title">
                                BUILDING OCCUPANCY
                            </div>
                            <div className="schedule-details__list-item-body">
                                <Charts />
                            </div>
                        </li>
                    </ul>

                </div>
            )}
        </div>
    )
};
export default ScheduleDetails;
