import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import DepartmentLinks from '../Department/DepartmentLinks';

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { user } = this.props;
    
    if(user) {
      return (
          <Menu.Menu position='right'>

      {/* for each (department_id) {
                <Menu.Item>
                  <DepartmentLinks />
                </Menu.Item>
          } */}

            <Link to="/">
              <Menu.Item>
              Departments
              </Menu.Item>
            </Link>

            <Menu.Item
              name='logout'
              onClick={ () => this.props.auth.handleLogout(this.props.history) }
            />
          </Menu.Menu>
      )
    }

    else if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => this.props.auth.handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } 
    else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={this.props.location.pathname === '/login'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);