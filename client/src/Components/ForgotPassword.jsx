import React, { useState } from 'react'
import Layout from './Layout'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("")
    // const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/forgot-password',
                { email,  answer, newPassword });
            if (res?.data?.success) {
                toast.success(res?.data?.message);
                navigate(location.state || '/login')
            } else {
                toast.error(res?.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong')
        }
    }
    return (
        <>
            <Layout title={'Forgot Password'}>
                <form onSubmit={handleSubmit} method="post">

                    <div className="container">

                        <label htmlFor="uname"><b>Email</b></label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter an Valid Email" name="uname" required />

                        <label htmlFor="uname"><b>New Password</b></label>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter a Valid Password" name="uname" required />

                        <label htmlFor="uname"><b>Answer</b></label>
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Enter your previous Hint" name="uname" required />

                        <button type="submit">RESET PASSWORD</button>

                    </div>
                </form>
            </Layout>

        </>
    )
}

export default ForgotPassword
