import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitHandler(e) {
        e.preventDefault();
        if (email.length < 9) {
            window.alert("enter a valid email");
            return;
        };
        if (password.length < 6) {
            window.alert("enter a strong password");
            return;
        };
        const jsonData = await fetch('https://brief-polished-radar.glitch.me/login-user', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await jsonData.json();
        if (!data.status) {
            window.alert(data.message);
        } else {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.user.userId);
            localStorage.setItem("name", data.user.name);
            localStorage.setItem("isLoggedIn", true);
            setTimeout(() => {
                window.location.href = '/home';
            }, 500);
        };
    };

    return (
        <div className='from-inherit' style={{display: "flex", backgroundImage: `url("https://img5.goodfon.com/wallpaper/nbig/5/f9/tsvet-forma-fon-208.jpg") `, height: "600px"}}>
            <Form style={{ display: "inline-block", border: "1px solid transparent", margin: "60px auto", padding: "30px"}}>
                {/* email --  */}
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* password --  */}
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long.
                    </Form.Text>
                </Form.Group>

                {/* checkbox -- */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" label="Keep me Logged-in" />
                </Form.Group>

                {/* button --  */}
                <Button className='mb-3' variant="primary" onClick={(e) => submitHandler(e)} >
                    Login
                </Button>
                <br/> <br/>
                < h3 >New user <Link to='/register' > <Button className='btn btn-danger'>Register here</Button></Link></h3>

            </Form>
        </div>
    );
};

export default Login;