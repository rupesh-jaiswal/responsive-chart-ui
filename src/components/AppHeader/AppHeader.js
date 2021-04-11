import React from 'react';
import { green } from '@material-ui/core/colors';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';import ErrorIcon from '@material-ui/icons/Error';
import Avatar from '@material-ui/core/Avatar';
import './AppHeader.scss'

const AppHeader = () => {
    return (
        <header className="app-header flex">
            <div className="app-header__titles flex">
                <Avatar alt=""src="me2.jpg" />
                <div className="app-header__greet-name">
                    <div className="app-header__greet">Hello,</div>
                    <h1 className="app-header__profile-name flex">
                        Rupesh Jaiswal
                    </h1>
                </div>
            </div>
            <div className="app-header__controls flex">
                <NotificationsNoneOutlinedIcon style={{ color: green[500] }}/>
            </div>
        </header>
    );
};

export default AppHeader;
