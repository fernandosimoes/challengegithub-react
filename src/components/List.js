import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getRepo } from "../actions";
import ReactTable from "react-table";



class List extends Component {
    constructor(props) {
        super(props);
        this.props.getRepo()
    }
    
  render() {
    console.log('this.props', this.props.repos)
    const user = this.props.length > 0 ? this.props.repos[0].owner.login : '';
    return (
      <div className="container">
        <ReactTable
          data={this.props.repos}
          columns={[
            {
              Header: "Repositorio do usuario: "+user,
              columns: [
                {
                  Header: "Project Name",
                  id: 'name',
                  accessor: d => {
                    return <a href={d.html_url}>{d.name}</a>
                  }
                }
              ]
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state', state.github)
    return {
        repos: state.github.repos
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRepo: bindActionCreators(getRepo, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)