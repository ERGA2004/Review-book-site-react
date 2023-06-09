import React, { Component } from 'react';
//import Amplify, { Auth } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';

// header
import AppHeader from '../components/AppHeader';

class Login extends Component {
    async componentDidMount() {
        console.log("Auth: ");
        console.log(Auth.currentAuthenticatedUser());
        await Auth.currentUserInfo()
            .then(data => console.log(data))
            .catch(err => console.log(err))
    } 

    render() {
        const federated = {
            google_client_id: '641757103744-pbhruvj75801k923hfbeq91h7ttninj3.apps.googleusercontent.com', 
            facebook_app_id: '2309758615736478',
        };    
        return (
            <div>
                <AppHeader/>
                <Authenticator federated={federated}/>
            </div>
        );
    }    
}

export default Login;


