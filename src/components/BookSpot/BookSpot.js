import React from 'react';
import { Button } from '@material-ui/core';
import './BookSpot.scss';

const BookSpot = () => {
    return (
        <div className="book-spot">
            <div className="book-spot__title">Scan SPOT tag to check-in</div>
            <Button variant="contained" className="book-spot__checkin-btn">
                Check-in
            </Button>
        </div>
    )
};

export default BookSpot;
