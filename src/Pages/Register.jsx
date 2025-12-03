import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false);
    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(
                        () => {
                            setUser({ ...user, displayName: name, photoURL: photo });
                        }
                    )
                    .catch((error) => {
                        setUser(user);
                        console.log(error);
                    })
                navigate('/');
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10">
                    <h2 className='text-2xl text-center font-semibold'>Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset gap-3">
                            <label className="label font-bold">
                                Your Name<span className='text-secondary text-lg'>*</span>
                            </label>
                            <input type="text" name='name' required className="input border-0 bg-base-200" placeholder="Enter your name" />
                            <label className="label font-bold">
                                Photo URL<span className='text-secondary text-lg'>*</span>
                            </label>
                            <input type="url" name='photo' required className="input border-0 bg-base-200" placeholder="Enter your photo url" />
                            <label className="label font-bold">
                                Email address<span className='text-secondary text-lg'>*</span>
                            </label>
                            <input type="email" name='email' required className="input border-0 bg-base-200" placeholder="Enter your email address" />
                            <label className="label font-bold">
                                Password<span className='text-secondary text-lg'>*</span>
                            </label>
                            <div className="relative">
                                <input type={show ? "text" : "password"}
                                    name='password'
                                    required
                                    className="input border-0 bg-base-200"
                                    placeholder="Enter your password"
                                    minlength="8"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    class="absolute inset-y-0 right-0 flex items-center px-3 text-lg text-accent"
                                >
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <small className='text-secondary'>*Must be more than 8 characters, including number, lowercase letter, uppercase letter</small>
                            <label className="label">
                                <input type="checkbox" required className="checkbox" />
                                Accept <span className="font-bold">Term & Conditions</span><span className='text-secondary text-lg'>*</span>
                            </label>
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                            <p className='text-center'>Already have an account ? <Link to='/auth/login' className="text-secondary">Login</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Register;