import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { headerWrapperStyle, typographyStyle } from './headerMaterialStyles';

import './header.css';

const Header = ({ usersNumber, messagesNumber, lastMessageTime }) => {
    return (
        <AppBar
            style={headerWrapperStyle}
            position='relative'
        >
            <div className="header__content header__content--left">
                <Typography style={typographyStyle}>
                    My-chat
                </Typography>
                <Typography style={typographyStyle}>
                    {usersNumber} participants
                </Typography>
                <Typography style={typographyStyle}>
                    {messagesNumber} messages
                </Typography>
            </div>
            <div className="header__content header__content--right">
                <Typography style={typographyStyle}>
                    Last message at: {lastMessageTime}
                </Typography>
            </div>
        </AppBar>
    )
}

export default Header;