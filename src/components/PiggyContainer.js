import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PiggyTile from './PiggyTile'
import Button from 'react-bootstrap/Button'
import NewPigModal from './NewPigModal'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'



function PiggyContainer({category}) {
    const userPiggys = useSelector(state => state.user.piggys)
    const [modalShow, setModalShow] = useState(false)
    const [show, setShow] = useState(true);

    function handleClick(){
        (userPiggys.length > 0 || modalShow ? setShow(false) : setShow(true))
        setModalShow(true)
        setShow(false)
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Get Started</Popover.Title>
            <Popover.Content>
                Got a savings goal? 
                Create a PiggyBank for it!
            </Popover.Content>
        </Popover>
      );

    
    return (
      
        <div className="bank-container">

           {userPiggys.length > 0 ? <Button className="new-pig-btn"  
                                            variant="outline-dark" 
                                            onClick={() => handleClick()}>
                                            + 
                                    </Button> 
                                :
                                    (<OverlayTrigger show={show} placement="top" overlay={popover}>
                                            <Button className="new-pig-btn"  
                                                    variant="outline-dark" 
                                                    onClick={() => handleClick()}>
                                                    +
                                            </Button> 
                                    </OverlayTrigger>)
            }
                                                                                                                                                                  
            <NewPigModal show={modalShow} onHide={() => setModalShow(false)}/>
      
        <div id="tile-container">
            {userPiggys ?  userPiggys.filter((piggy) => { 
                if(category=== ""){return piggy}
                else return piggy.category === category
                })
                .map((piggy) => <PiggyTile key={piggy.id} piggy={piggy} />) : null}
        </div>
        </div>
    )
}

export default PiggyContainer
