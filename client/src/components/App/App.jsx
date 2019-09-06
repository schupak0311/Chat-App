import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../loginPage/LoginPage';
import Chat from '../chat/Chat'
import MessageEditor from '../messageEditor/MessageEditor'
import UserList from '../userList/UserList'
import UserEditor from '../userEditor/UserEditor'

function App() {
    return (
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/message/:id" component={MessageEditor}/>
            <Route path="/users" component={UserList}/>
            <Route path ="/user" component={UserEditor}/>
        </Switch>
    );
}

export default App;