import React from 'react';
import '../styling/Header.scss';

interface HeaderProps {
    sections: string[]
}

const HeaderPresentational: React.FC<HeaderProps> = (props) => {
    return(
        <div className="Header">
            <ul>
                {props.sections.map(section => <li><a href='#'>{section}</a></li>)}
            </ul>
        </div>
    );
}

export default HeaderPresentational;