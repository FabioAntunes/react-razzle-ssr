import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

export const AddTodo = ({ submitForm, username }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          submitForm(input)
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Search for user
        </button>
      </form>
    </div>
  )
}
