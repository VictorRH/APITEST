import ImageComponent from "./ImageComponent";
import React from 'react';
import { Link } from "react-router-dom";
import UppercaseText from "./UppercaseText";
const Pets = () => {

    return (
        <div>
            <ImageComponent />
            <Link to="/"><UppercaseText text="Back"/></Link>
        </div>
    );
}
export default Pets;