import React from 'react';
import { Link } from "react-router-dom";
import UppercaseText from './UppercaseText';
import '../style/styleapp.css';

const Aplication = () => {

    return (
        <div>
          <h1>Component Aplication</h1>
            <Link to="/"><UppercaseText text="Back"/></Link>
        </div>
    );
}
export default Aplication;