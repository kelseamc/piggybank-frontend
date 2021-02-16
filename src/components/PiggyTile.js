import React from 'react'
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'

import EditTileMenu from './EditTileMenu'


function PiggyTile({piggy}) {
   
    const progress = piggy.current_balance / piggy.goal
    


    return (
        <div >
            <Card className={`pig-header-${piggy.category}`} style={{ width: '18rem' }} >
                <Card.Header>
                <h5> {piggy.name}</h5>
                  
                </Card.Header>
                <Card.Body>
                    <Card.Title>Goal: ${piggy.goal}</Card.Title>
                    <ProgressBar variant={piggy.category} animated now={progress * 100} />
                    <Card.Text>Saved So Far: ${piggy.current_balance}</Card.Text>
                    <EditTileMenu 
                        piggy={piggy} 
                    />
                </Card.Body>
            </Card>
        </div>
    )

}

export default PiggyTile
