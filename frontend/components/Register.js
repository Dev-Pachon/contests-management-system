import Link from 'next/Link'

export default function Register () {
        return (
            <main>

                <h2 className="text-center">Account Registration</h2><br />

                <form className="w-50 mx-auto p-2" method="POST" action = "http://localhost:8080/register">

                    <div className="alert alert-warning rounded" role="alert">

                        <ul>

                            <li>Nicknames must contain only letters or numbers.</li>

                            <li>Nicknames must be longer than 4 characters but shorter than 51.</li>

                            <li>Passwords must contain a uppercase letter, lowercase letter, number, and special character.</li>

                            <li>Passwords must be greater than 5 characters but less than 60.</li>

                        </ul>

                    </div>

                    <br />

                    <div className="form-group">

                        <label htmlFor="Email">Email:</label>

                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" required /><br /><br />

                        <label htmlFor="password">Password:</label>

                        <input type="password" id="password" name="password" className="form-control" placeholder="Password" required /><br /><br />

                        <label htmlFor="password2">Confirm password:</label>

                        <input type="password" id="password2" className="form-control" name="password2" placeholder="Confirm Password" required /><br /><br />

                        <label htmlFor="nickname">Nickname:</label>

                        <input type="text" id="nickname" name="nickname" className="form-control" placeholder="Nickname" required /><br /><br />

                        <label htmlFor="firstName">FirstName: </label>

                        <input type="text" id="firstName" name="firstName" className="form-control" placeholder="FirstName" required /><br /><br />

                        <label htmlFor="lastName">LastName: </label>

                        <input type="text" id="lastName" name="lastName" className="form-control" placeholder="LastName" required /><br /><br />

                        <label htmlFor="birthdate">Country: </label>

                        <input type="text" id="birthdate" name="country" className="form-control" min="" max="" required /><br /><br />

                        <input type="submit" className="btn btn-primary" value="Save" /> &nbsp;&nbsp;

                        <Link as = "/" href="/">

                            <a className="btn btn-primary" role="button">Cancel</a>

                        </Link>

                        <br /><br />

                    </div>

                </form>

            </main>
        )
}
