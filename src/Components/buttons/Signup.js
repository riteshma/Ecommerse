import React from 'react'

const Signup = () => {
    return (
        <>
            {/*Button trigger modal*/}
            <button type="button" className="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#SignupModal">
                <i class="fa-solid fa-user-plus"></i> Sign up
            </button>

            {/*Modal*/}
            <div className="modal fade" id="SignupModal" tabindex="-1" aria-labelledby="SignModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="SignupLabel">Sign up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className='btn btn-primary w-100 mb-2'><i class="fa-brands fa-google"></i> Signup with Google</button>
                            <button className='btn btn-primary w-100 mb-2'><i class="fa-brands fa-facebook"></i> Signup with facebook</button>
                            <form>
                            <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Username</label>
                                    <input type="text" class="form-control" id="exampleUsername" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup