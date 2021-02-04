import React from 'react'
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Icon } from '@iconify/react';
import piggyBankOutline from '@iconify-icons/mdi/piggy-bank-outline';
import EditTileMenu from './EditTileMenu'


function PiggyTile({piggy}) {
   
    const progress = piggy.current_balance / piggy.goal


    return (
        <>
            <Card className="pig-header" border="primary" style={{ width: '18rem' }}>
                <Card.Header>
                <h5><Icon className="pig-icon" icon={piggyBankOutline} color="purple" height="2em" /> <br/>  {piggy.name}</h5>
                  
                </Card.Header>
                <Card.Body>
                    <Card.Title>Goal: ${piggy.goal}</Card.Title>
                    <ProgressBar  animated now={progress * 100} />
                    <Card.Text>Saved So Far: ${piggy.current_balance}</Card.Text>
                    <EditTileMenu 
                        piggy={piggy} 
                    />
                </Card.Body>
            </Card>
        </>
    )

}

export default PiggyTile
