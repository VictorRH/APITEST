import React from 'react';
import { Link } from 'react-router-dom';
import UppercaseText from './UppercaseText';
import '../style/styleapp.css';

const Home = () => {

    return (
        <div>
            <h1>Layout</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Login"><UppercaseText text="Login"/></Link>
                    </li>
                    <li>
                        <Link to="/Aplication"><UppercaseText text="Aplication"/></Link>
                    </li>
                    <li>
                        <Link to="/Pets"><UppercaseText text="Pets"/></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;