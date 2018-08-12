import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getCommits } from "../actions";
import TitleUser from "./TitleUser";
import { Link } from "react-router-dom";
import OnVisible from 'react-on-visible';
import Loading from './Loading';

class List extends Component {
  constructor(props) {
    super(props);
    if(props.creator === "") {
      props.history.goBack();
    }
  }

  render() {
    if(!this.props.commits.length) {
      return <Loading />
    }

    return (
      <div className='container margin--bottom' onScroll={this.lazyload}>
        <TitleUser showbutton={false} creator={this.props.creator} />
        <Link to="/" className="button is-link margin--bottom"> Back </Link>
        {this.props.commits.map((commit, cindex) => {
          return (
            <OnVisible key={cindex} className="notification">
              <div>
                <p >{commit.commit.message}</p>
              </div>
            </OnVisible>
          )
        })}
      </div>
    );
  }
  componentDidMount() {

    const reponame =  this.props.match.params.name
    console.log('props', this.props)
    this.props.getCommits(reponame, this.props.creator);
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  return {
    repos: state.github.repos,
    creator: typeof state.github.creator !== "undefined" ? state.github.creator : '',
    commits: typeof state.github.commits !== "undefined" ? state.github.commits : [],
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCommits: bindActionCreators(getCommits, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)