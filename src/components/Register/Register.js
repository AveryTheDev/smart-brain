import React from 'react';

const Register = ({onRouteChange}) => {
    return (
        <article className="center mw5 mw6-ns br3 hidden ba b--black-10 shadow-5 mv4">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up"
                        className="ba b--transparent ph0 mh0">

                        {/* Register Title */}
                        <legend
                            className="f3 fw6 ph0 mh0 center">
                                Register Your Account
                        </legend>

                        {/* Name Input */}
                        <label
                            className="db fw6 lh-copy f6 center"
                            htmlFor="username">
                                Name
                            </label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="text"
                            name="username"
                            id="username" />

                        {/* Email-Address Input */}
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6 center"
                                htmlFor="email-address">
                                    Enter Your Email
                            </label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address" />
                        </div>

                        {/* Password Input */}
                        <div className="mv3">
                            <label
                                className="db fw6 lh-copy f6 center"
                                htmlFor="password">
                                    Create Your Password
                                </label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password" />
                        </div>
                    </fieldset>

                    {/* Submit Input Button */}
                    <div className="">
                        <input
                            onClick={() => onRouteChange('home')}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
                            type="submit"
                            value="Sign in" />
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Register;