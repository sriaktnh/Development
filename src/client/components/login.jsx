import React from 'react';
import styles from './login.css';
import Header from './header';
import withRouter  from 'react-router-dom/withRouter';

 class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    loginHandler() {
        let uid = document.getElementById('uid').value;
        let pwd= document.getElementById('pwd').value;
        console.log('uid:', uid, 'pwd: ', pwd);
        if( uid && pwd ){
            this.props.history.push("/demo2")
        }
    }
    render() {
        return(
            <div>
            <Header/>
            <div styleName="styles.container">
                <h3>Log in</h3>
                <div>
                    <input type='text'id='uid' placeholder='Please enter user name' />
                    <input type='password' id='pwd' placeholder='password' />
                    <button styleName="styles.btn" onClick={()=>this.loginHandler()}>Log in</button>
                </div>
            </div>
            </div>
        );
    }
}
export default withRouter(Login);