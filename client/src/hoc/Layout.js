import React from 'react';
import Header from '../components/Header/Header';

const layout = (props) => (
    <div>
        <Header />
        <div>
            {props.children}
        </div>
    </div>
)

export default layout;
