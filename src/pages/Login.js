import React, { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { getOTP, loginUser } from '../store/actions/user';

import Button from '../components/button'
import Input from '../components/input'
import Logo from "../assets/images/logoAndText.png"

const Login = () => {
    const [phone, setPhone] = useState(null);
    const [otp, setOTP] = useState("");


    const step = useSelector(state => state.user.step);
    const loading = useSelector(state => state.user.loading);

    const dispatch = useDispatch();
    const history = useHistory();


    const handleGetOTP = () => {
        dispatch(getOTP(phone));
    };
    const handleLogin = () => {
        dispatch(loginUser(phone, otp));
    };
    useLayoutEffect(() => {
        if(localStorage.getItem('token')){
            history.push('/');
        }
    });

    return (
        <div className="login-container">
           <div className="login-card">
               <div className="login-card-header">
                <img src={Logo} width={150} /><h1>Docs</h1>
               </div>
                <hr className="divider" />
               {step === 1 ? (
                   <>
                    <p>Enter you mobile number registered with farmako to login</p>
                    <Input type="number" value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="9999 999 999" />
                    <Button disabled={!(phone && phone.toString().length === 10)} loading={loading} action={handleGetOTP} tittle="Next" />
                    </>
               ) : step === 2 ? (
                   <>
                    <p>Enter the OTP sent to the entered mobile number {phone}</p>
                    <Input type="number" value={otp} name="phone" onChange={(e) => setOTP(e.target.value)} action={handleLogin} placeholder="0 0 0 0" />
                    <Button disabled={!otp} loading={loading} action={handleLogin} tittle="Login" />
                    </>
               ) : (<h3>Something went wrong</h3>)}
               
           </div>
        </div>
    )
}

export default Login