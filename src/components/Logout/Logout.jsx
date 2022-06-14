import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../../redux/actions/auth'

const Logout = ({ logout }) => {
   useEffect(() => {
      logout()
   }, [logout])

   return <Redirect to="/auth" />
}

export default connect(
   null,
   { logout }
)(Logout)