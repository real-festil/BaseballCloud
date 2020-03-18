import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { connect } from "react-redux";

const ApolloWrapper = props => {
  const { headers } = props;
  const client = new ApolloClient({
    uri: "https://baseballcloud-back.herokuapp.com/api/v1/graphql",
    headers
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

const mapStateToProps = state => {
  return {
    headers: state.auth.user.headers
  };
};

export default connect(mapStateToProps)(ApolloWrapper);
