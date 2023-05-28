import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Signup.css'
import Layout from './Layout';
import toast from 'react-hot-toast';
import axios from 'axios'

const Signup = () => {
    const [company, setcompany] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register',
                { company, email, password, phone, address, answer });
            if (res?.data?.success) {
                toast.success(res?.data?.message);
                navigate('/login')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong')
        }
    }

    return (
        <>
            <Layout title={'Signup Page'}>
                <form method="post" onSubmit={handleSubmit}>

                    <div className="container">
                        <label htmlFor="uname"><b>Company Name</b></label>
                        <input type="text" value={company} onChange={(e) => setcompany(e.target.value)} placeholder="Name of your Company" required />

                        <label htmlFor="uname"><b>Email</b></label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter an Valid Email" required />

                        <label htmlFor="uname"><b>Password</b></label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a Strong Password" required />

                        <label htmlFor="uname"><b>Phone</b></label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your Phone Number" required />

                        <label htmlFor="uname"><b>Address</b></label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your Address" required />

                        <label htmlFor="uname"><b>Answer</b></label>
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Enter a Hint you have to remeber it" required />

                        <button type="submit">SIGNUP</button>

                    </div>
                </form>
            </Layout>

        </>
    )
}

export default Signup
