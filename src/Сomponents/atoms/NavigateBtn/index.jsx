import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const NavigateBtn = ({text, address}) => {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate(address)} className="gallery__btn" variant='text'>{text}></Button>
    );
};

export default NavigateBtn;