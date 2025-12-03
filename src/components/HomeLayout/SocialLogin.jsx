import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const { signInWithGoogle, signInWithGithub, setUser } = use(AuthContext);
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleGithubLogin = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <h2 className='text-2xl font-semibold mb-5'>Login with</h2>
            <div className='space-y-5'>
                <button onClick={handleGoogleLogin} className="btn w-full btn-outline btn-secondary">
                    <FcGoogle size={24} /> Login with Google
                </button>
                <button onClick={handleGithubLogin} className="btn w-full btn-outline btn-primary">
                    <FaGithub size={24} /> Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;