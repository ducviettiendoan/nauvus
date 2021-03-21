
import React from "react";
// nodejs library that concatenates classes
import connect from 'redux-connect-decorator';
import { Redirect, Link } from "react-router-dom";
import { storeAuthToken } from "reducers/authentication";

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from 'config/aws-export';
Amplify.configure(awsconfig());

class ProcessLogin extends React.Component {
  state = {
    doneProcess: false
  };

  async componentDidMount() {
    // console.log(this.props.location);
    // let params = new URLSearchParams(window.location.hash);
    // let token = params.get('access_token');
    // console.log(token);
    // // Store 
    // storeAuthToken(token);
    // // Loading -> false
    // this.setState({ doneProcess: true });

    try {
        const user = await Auth.signIn('namnh60', 'Abcd@1234');
        let accessToken = user.signInUserSession.accessToken.jwtToken;
        console.log(accessToken);
    } catch (error) {
        console.log('error signing in', error);
    }
  }

  render() {
    const { auth, location } = this.props;
    return (
      <>
        {/* { this.state.doneProcess ? 
          <>
            <Redirect to={'/#'} />
          </> :
          <>
            <div>Process Call back</div>
          </>
        } */}
        aaaaa
      </>
    );
  }
}

export default ProcessLogin;
