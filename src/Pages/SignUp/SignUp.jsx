import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
function SignUp() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("User profile info updated")
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Account created successfully.',
                            showConfirmButton: false,
                            timer: 4000
                        });
                        navigate('/')


                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className=" hero min-h-screen bg-base-200" style={{
                width: '100%',
                height: '400px',
                backgroundImage: 'url(https://i.ibb.co.com/Kq7zyPw/18322607.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Join Us Today!</h1>
                            <p className="py-6">
                                Create an account to enjoy exclusive offers, track your orders, and personalize your experience. Signing up is quick and easy!</p>
                        </div>
                        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered input-warning w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type='text' {...register("photoURL", { required: true })} placeholder="name" className="input input-bordered input-warning w-full max-w-xs " />
                                    {errors.name && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type='email' placeholder="email" className="input input-bordered input-warning w-full max-w-xs " />
                                    {errors.email && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: true, minLength: 6, maxLength: 20 })} type="password" name='password' placeholder="password" className="input input-bordered input-warning w-full max-w-xs" />
                                    {errors.password && <span className='text-red-600'>This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-warning bg-slate-200 border-0 border-b-4 mt-4 items-center text-center text-yellow-400" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='text-center text-yellow-400 mb-5'><small>Already have an account?? <Link to="/login">Log In</Link> </small></p>
                        </div>

                    </div>
                </div>
            </div>










        </>
    )
}

export default SignUp