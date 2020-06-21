import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

//Redux
import propTypes from "prop-types";
import { connect } from "react-redux";
import { resetUser } from "../../Redux/actions/authActions";

class Resetpassword extends Component {
	constructor() {
		super();
		this.state = {
			password: "",
			password2: "",
			errors: {},
			buttonText: "Will Reset",
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		// Spinner State
		this.setState({
			buttonText: (
				<div>
					<div>
						<span
							className="spinner-border spinner-border-sm"
							role="status"
							aria-hidden="true"
						></span>{" "}
						Please Wait...
					</div>
				</div>
			),
		});
		event.preventDefault();

		const userData = {
			password: this.state.password,
			// password2: this.state.password2,
		};

		console.log(userData);
		this.props.resetUser(userData);
	}

	// onSubmit = (e) => {
	// 	e.preventDefault();
	// 	const { userId, token } = this.props;
	// 	const { password } = this.state;

	// 	axios
	// 		.post(`/api/auth/reset-password/${userId}/${token}`, { password })
	// 		.then((res) => res)
	// 		.catch((err) =>
	// 			console.warn("ERROR FROM SERVER UPDATING PASSWORD:", err)
	// 		);
	// 	this.setState({ submitted: !this.state.submitted });
	// };

	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (
			<div>
				<section className="container mt-5">
					<div className="row">
						<div className="col-md-8 m-auto">
							<div className="card bg-white py-2 px-4">
								<div className="card-body">
									<Link to="/login">Back to login</Link>
									<h1 className="mb-2">Reset Password</h1>
									<p>
										{" "}
										Use this form to reset your password using the registered
										email address.
									</p>
									<form onSubmit={this.onSubmit} autocomplete="off">
										<div className="form-group">
											<label>Enter New Password</label>
											<input
												required
												type="password"
												name="password"
												className="form-control"
												placeholder="enter new password"
												value={this.state.password}
												onChange={this.onChange}
											/>
										</div>
										<div className="form-group">
											<label>Confirm Password</label>
											<input
												required
												type="password"
												name="password2"
												className="form-control"
												placeholder="confirm password"
												value={this.state.password2}
												onChange={this.onChange}
											/>
										</div>
										<div className="form-group">
											<button
												type="submit"
												defaultValue="Login"
												className="btn btn-primary  btn-block"
											>
												{this.state.buttonText}
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

Resetpassword.propTypes = {
	resetUser: propTypes.func.isRequired,
	auth: propTypes.object.isRequired,
	errors: propTypes.object.isRequired,
	// token: propTypes.string.isRequired,
	// userId: propTypes.string.isRequired,
};

const mapStateProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateProps, { resetUser })(Resetpassword);
