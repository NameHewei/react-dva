import React from 'react'
import { connect } from 'dva';
import PropTypes from 'prop-types'
import { Button } from 'antd'

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { stat } from 'fs';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});

class GQL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            re: 'init'
        }
    }

    reqQL= () => {
        client.query({
                query: gql`
                {
                    hello
                }
                `
            })
            .then((result) => {
                console.log(result);
                this.setState({
                    re: result.data.hello
                })
            });
    }

    render() {
        return (  
            <div>
                <h2>{ this.state.re }</h2>
                <Button type="primary" onClick={this.reqQL}>发起graphql请求  dajiahao</Button>
            </div>
        )
    }
}

export default connect()(GQL)