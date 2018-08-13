import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getRepo, getRepoStarred, getOrderedRepo, credentialUpdate } from "../actions";
import TitleUser from './TitleUser';
import Filters from './Filters';
import { Link } from "react-router-dom";
import Loading from './Loading';
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered : false,
            newcredential: ''
        }
        this.changeUserRepos = this.changeUserRepos.bind(this);
        this.changecredential = this.changecredential.bind(this);
        this.submitcredential = this.submitcredential.bind(this);
        this.starredfirst = this.starredfirst.bind(this);
        this.clearfilters = this.clearfilters.bind(this);
        this.orderCards = this.orderCards.bind(this);
    }

    changecredential(e) {
        this.setState({
            newcredential: e.target.value
        })
    }

    submitcredential(e) {
        e.preventDefault();
        this.props.credentialUpdate(this.state.newcredential);
    }

    changeUserRepos(user) {
        this.props.getRepo(user);
    }

    starredfirst() {
        this.setState({
            filtered : true
        })
        this.props.getRepoStarred(this.props.creator);
    }

    clearfilters() {
        this.setState({
            filtered : false
        })
        this.props.getRepo(this.props.creator)
    }

    orderCards(direction) {
        this.setState({
            filtered : true
        })
        this.props.getOrderedRepo(this.props.creator, direction)
    }

    render() {
        if (this.props.errorcredentials) {
            return (
                <div className="container margin--bottom">
                    <TitleUser changeUserRepos={this.changeUserRepos} creator={this.props.creator} clearfilters={this.clearfilters} showbutton={true} />

                    <section className="hero">
                        <div className="hero-body">
                            <div className="container">
                                <p className="title has-text-centered is-size-6">
                                    Credentials with problem, please change the credentials to test application. follow <a href="https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/" target="_blank">link </a>to new credential and add this new credential in the form.
                                </p>
                                <form className="custom--form is-horizontal" submit="#" onSubmit={(e) => this.submitcredential(e)}>
                                    <div className="field is-horizontal margin--left">
                                        <div className="control">
                                            <input className="input" type="password" placeholder="new credentials" onChange={this.changecredential}/>
                                        </div>
                                        <div className="control">
                                            <button className="button is-primary" type="submit" >Change</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }

        if(this.props.repos.length === 0) {
            return (
                <div className="container margin--bottom">
                    <TitleUser changeUserRepos={this.changeUserRepos} creator={this.props.creator} clearfilters={this.clearfilters} showbutton={true} />

                    <Filters starredfirst={this.starredfirst} clearfilters={this.clearfilters} ordenar={this.orderCards} />
                    {this.state.filtered &&
                    <section className="hero">
                        <div className="hero-body">
                            <div className="container">
                            <p className="title has-text-centered is-size-5">
                                No finded repositories for this filter
                            </p>
                            </div>
                        </div>
                    </section>
                    }
                    {!this.state.filtered && 
                        <Loading />
                    }
                </div>
            );
        }
        return (
            <div className="container margin--bottom">
                <TitleUser changeUserRepos={this.changeUserRepos} creator={this.props.creator} clearfilters={this.clearfilters} showbutton={true} />
                <Filters starredfirst={this.starredfirst} clearfilters={this.clearfilters} ordenar={this.orderCards} />
                <div className="columns is-multiline">
                {this.props.repos.map((repository, indexrepo)=>{
                    const commits = "/commits/" + repository.name;
                    return (
                        <div key={indexrepo} className="column is-4">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        {repository.name}
                                    </p>

                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        {repository.description}
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <Link to={commits} className="card-footer-item">List Commits</Link>
                                </footer>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.getRepo(this.props.creator == "" || typeof this.props.creator == "undefined" ? 'reactjs' : this.props.creator)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        repos: typeof state.github.repos != "undefined" ? state.github.repos : [],
        creator: state.github.creator,
        errorcredentials: state.github.errorbadcredentials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRepo: bindActionCreators(getRepo, dispatch),
        getRepoStarred: bindActionCreators(getRepoStarred, dispatch),
        getOrderedRepo: bindActionCreators(getOrderedRepo, dispatch),
        credentialUpdate: bindActionCreators(credentialUpdate, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards)