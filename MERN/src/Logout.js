import React from 'react'
import {useEffect} from 'react'

function Logout() {
    useEffect(() => {
        fetch("http://localhost:6969/logout")
          .then(res => res.json())
          .then(data => {
            data.map(item => {
              item.setItem('token', null)
              item.setItem('token_invalid', true)
            })
          })
      }, [])
      localStorage.clear()
      const token = sessionStorage.getItem('token')
      sessionStorage.setItem('token', null)
      window.location.reload();
}

export default Logout