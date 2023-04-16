import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tc, setTc] = useState(false);
    console.log(tc);

    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();
        if (name.length <3) {
            window.alert("enter a valid name");
            return;
        };
        if (email.length < 7) {
            window.alert("enter a valid email");
            return;
        };
        if (password.length < 8) {
            window.alert("enter a strong password");
            return;
        };
        if (!tc) {
            window.alert("accept T&C to register");
            return;
        };
        const jsonData = await fetch('http://localhost:3002/register-user', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
        const data = await jsonData.json();

        if (!data.status) {
            window.alert(data.message);
        } else {
            window.alert(data.message);
            navigate('/login');
        };
    };


    return (
        <div className='from-inherit' style={{display: "flex", backgroundImage: `url("https://img5.goodfon.com/wallpaper/nbig/5/f9/tsvet-forma-fon-208.jpg") `, height: "1200px"}}>
            <Form style={{ display: "inline-block", border: "1px solid transparent", margin: "60px auto", padding: "30px"}}>
                
                <Form.Group className="mb-3" controlId="formBasicName" >
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Form.Text className="text-muted">
                        Enter your full name.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with T&C" value={tc} onChange={(e) => setTc(e.target.checked)} />
                </Form.Group>

                <Button variant="primary" onClick={(e) => submitHandler(e)}>
                    Submit
                </Button>
                <br/> <br/>
                 < h3 > Alredy a user <Link to='/login' >Login here</Link></h3>
            </Form>
        </div>
    );
};

export default Register;