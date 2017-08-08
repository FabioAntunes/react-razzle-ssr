import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import { GitUser } from './GitUser.component';
import { Input } from './styled/Input.styled';
import { Button } from './styled/Button.styled';

const GitWrapper = ({ history, match, git, submitForm, loadUser}) => {
  let input

  return  (
    <div>
      <form action="GET"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          history.push(`/git/user/${input.value}`)
          input.value = ''
        }}
      >
        <Input innerRef={node => {input = node}} type="text" placeholder="github username"/>
        <Button type="submit">Search</Button>
      </form>
      <Route path={`${match.url}/user/:username`} render={props => <GitUser {...props} git={git} loadUser={loadUser}/>}/>
    </div>
  )
}

GitWrapper.PropTypes = {
  git: PropTypes.object.isRequired,
  submitForm: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
}
export { GitWrapper };
