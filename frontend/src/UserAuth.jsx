import React, { useState } from 'react'
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    if(currentUser!==null){
        return children;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'you are not logged in!'
        })
        return <Navigate to="/login"/>
    }

}

export default UserAuth;