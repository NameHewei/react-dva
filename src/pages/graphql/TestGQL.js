import React from 'react'
import { connect } from 'dva';
import PropTypes from 'prop-types'
import { Button } from 'antd'

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const GQL = () => {
    client
    .query({
        query: gql`
        {
            rates(currency: "USD") {
            currency
            }
        }
        `
    })
  .then(result => console.log(result));

    return (
        <div>
            <Button type="primary">发起graphql请求</Button>
        </div>
    )
}

export default connect()(GQL)