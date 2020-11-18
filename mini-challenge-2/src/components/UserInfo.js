import React, { Component } from 'react'

export class UserInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        });
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        });
    }

    render() {
        return (
            <div className="col-3">
                {this.state.isLoggedIn ? (
                    <div>
                        <p>Logged In!</p>
                        <button
                            className="btn btn-danger"
                            onClick={this.handleSignOut}
                        >Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <p>Please Sign In</p>
                        <button
                            className="btn btn-success"
                            onClick={this.handleSignIn}
                        >Sign In</button>
                    </div>
                )}
            </div>
        )
    }
}

export default UserInfo
