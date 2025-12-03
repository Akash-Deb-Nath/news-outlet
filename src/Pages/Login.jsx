import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10">
                <h2 className='text-2xl text-center font-semibold'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset gap-3">
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
                        {
                            error && <span className='text-red-500 text-xs'>wrong password</span>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center'>Don’t Have An Account ? <Link to='/auth/register' className="text-secondary">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;