import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import PageOne from '../_components/PageOne'
import PageTwo from '../_components/PageTwo'


import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
                <Router>
                    <div>
                    <h3>Hi {user.firstName}!</h3>
                        <a href="/login" class="btn btn-info btn-lg">
                            <span class="glyphicon glyphicon-log-out"></span> Log out
                        </a>
                    <nav>
                        <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/page-1">Page1</Link>
                        </li>
                        <li>
                            <Link to="/page-2">Page2</Link>
                        </li>
                        </ul>
                    </nav>
            
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/page-1" component={PageOne}>
                        </Route>
                        <Route path="/page-2" component={PageTwo}>
                        </Route>

                        <Route path="/">
                        <Home />
                        </Route>
                    </Switch>
                    </div>
                </Router>
            
        );
    }
}
function Home() {
    return <h2>Home</h2>;
  }

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };