import React from 'react';
import HeaderPresentational from './Header.presentational';

const HeaderContainer: React.FC = () => {
    const sections = ['Home', 'Projects', 'Contact', 'About'];
    return (
        <nav>
            <HeaderPresentational sections={sections} />
        </nav>
    );
}

export default HeaderContainer;