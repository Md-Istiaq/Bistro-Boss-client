import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='md:ml-10 md:mr-10' >
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left basis-1/2">
                        <img className='h-2/4' src="https://i.ibb.co.com/KrXnNyD/rb-739.png" alt="" />
                    </div>
                    <div className='basis-1/3'>
                        <p className='text-3xl font-bold text-center m-5'>Sign Up</p>
                        <div className=" bg-base-100  w-full shrink-0 shadow-2xl">

                            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type='text' {...register("name",{ required: true })}  placeholder="name" className="input input-bordered input-warning w-full max-w-xs " />
                                    {errors.name && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email",{ required: true })} type='email' placeholder="email" className="input input-bordered input-warning w-full max-w-xs " />
                                    {errors.email && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password",{ required: true , minLength:6, maxLength: 20  } )} type="password" name='password' placeholder="password" className="input input-bordered input-warning w-full max-w-xs" />
                                    {errors.password && <span className='text-red-600'>This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input  className="btn btn-outline btn-warning bg-slate-200 border-0 border-b-4 mt-4 items-center text-center text-yellow-400" type="submit" value="Log In" />
                                </div>
                            </form>
                            <p className='text-center text-yellow-400'><small>Already have an account?? <Link to='/login'>Sign Up</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp