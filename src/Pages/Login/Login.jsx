import React from 'react'

function Login() {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email , password)
    }
    return (
        <div className='md:ml-10 md:mr-10' >
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left basis-1/2">
                    <img className='h-2/4' src="https://i.ibb.co.com/KrXnNyD/rb-739.png" alt="" />
                    </div>
                    <div className='basis-1/3'>
                        <p className='text-3xl font-bold text-center m-5'>Log In</p>
                        <div className=" bg-base-100  w-full shrink-0 shadow-2xl">

                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered input-warning w-full max-w-xs " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered input-warning w-full max-w-xs" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-warning bg-slate-200 border-0 border-b-4 mt-4 items-center text-center text-yellow-400" type="submit" value="Log In" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login