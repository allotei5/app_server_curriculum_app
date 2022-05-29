import { useState } from 'react'
import { ProfileModal } from './ProfileModal'

export const ProfileModalButton = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <li><p className="link" style={{margin: "0", padding: "0", cursor: "pointer"}} onClick={() => handleShow()}>Profile</p></li>
            <ProfileModal show={show} handleClose={handleClose} />
        </>
  )
}
