import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from './styled/Figure.styled';

class GitUser extends React.Component {
  componentDidMount() {
    if (!this.props.git.user){
      this.props.loadUser(this.props.match.params.username);
    }
  }
  componentDidUpdate(prevPops) {
    if (this.props.match.params.username !== prevPops.match.params.username) {
      this.props.loadUser(this.props.match.params.username);
    }
  }

  render() {
    const user = this.props.git.user;
    return (
      <div>
        <div>
          <Figure>
            <img src={user.avatar_url}/>
          </Figure>
          <p><strong>Name: </strong>{user.name}</p>
          <p><strong>Company: </strong>{user.company}</p>
          <p><strong>Location: </strong>{user.location}</p>
          <p><strong>Followers: </strong>{user.followers}</p>
          <p><strong>Repos: </strong>{user.public_repos}</p>
          <p><strong>Username: </strong>{user.login}</p>
        </div>
      </div>
    )
  }
}

GitUser.PropTypes = {
  user: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
}
export { GitUser };
