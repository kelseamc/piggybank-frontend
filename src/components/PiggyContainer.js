import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PiggyTile from './PiggyTile'
import Button from 'react-bootstrap/Button'
import NewPigModal from './NewPigModal'



function PiggyContainer() {
    const userPiggys = useSelector(state => state.user.piggys)
   
    const [modalShow, setModalShow] = useState(false)

    return (
        <div className="bank-container">
        <div>
            <Button 
            className="new-pig-btn" 
            variant="outline-dark" 
            onClick={() => setModalShow(true)}>
                +
            </Button>
            <NewPigModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
        <div id="tile-container">
            {userPiggys ? userPiggys.map((piggy) => <PiggyTile key={piggy.id} piggy={piggy} />) : null}
        </div>
        </div>
    )
}

export default PiggyContainer
