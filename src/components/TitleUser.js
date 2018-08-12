import React, { Component } from 'react';

class TitleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeUser: false,
            newUser: ''
        }

        this.changeUser = this.changeUser.bind(this);
        this.submitUser = this.submitUser.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    changeUser() {
        this.setState({
            changeUser: !this.state.changeUser ? true : false
        })
    }

    onChange(e){
        this.setState({
            newUser: e.target.value
        })
    }

    submitUser(e) {
        e.preventDefault();
        this.props.changeUserRepos(this.state.newUser)
        this.changeUser();
    }


    render() {
        if(this.props.creator == "") {
            return false;
        }
        return (
            <div className="level">
                <div className="level-left">
                    <h1 className="title level-item is-marginless">Listing repositories from user: {this.props.creator}</h1>

                    {!this.state.changeUser && this.props.showbutton &&
                        <a className="button is-link level-item margin--left is-size-7" onClick={this.changeUser.bind(this)}> Change User </a>
                    }

                    {this.state.changeUser &&
                        <form className="is-horizontal" onSubmit={(e) => this.submitUser(e)}>
                        <div className="field is-horizontal margin--left">
                            <div className="control">
                                <input className="input" type="text" placeholder="Git User Name" onChange={(e) => this.onChange(e)} />
                            </div>
                            <div className="control">
                                <button className="button is-primary" type="submit">Change</button>
                            </div>
                        </div>
                    </form>
                    }

                </div>

            </div>
        );
    }
}

export default TitleUser;