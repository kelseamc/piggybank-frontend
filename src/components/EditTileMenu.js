import React, { useState } from 'react'
import { Planet } from 'react-planet';
import { Icon } from '@iconify/react';
import leadPencil from '@iconify-icons/mdi/lead-pencil';
import cashPlus from '@iconify-icons/mdi/cash-plus';
import cashRemove from '@iconify-icons/mdi/cash-remove';
import deleteForeverOutline from '@iconify-icons/mdi/delete-forever-outline';
import { useDispatch } from 'react-redux';
import { deletePiggy } from '../redux/userSlice';
import { addAssign } from '../redux/balanceSlice'
import PiggyAddMoney from './PiggyAddMoney';
import PiggySubtractMoney from './PiggySubtractMoney';


function EditTileMenu({piggy}) {

/*************  Redux Handlers    *******************/
    const dispatch = useDispatch()

    function handleReduxDelete(id) {
        dispatch(deletePiggy(id))
        dispatch(addAssign(piggy.current_balance))
    }

/*************  Event Handlers    *******************/
    const [modalAddShow, setModalAddShow] = useState(false)
    const [modalRemoveShow, setModalRemoveShow] = useState(false)

    
    function handleRemove(){
        fetch(`http://localhost:3000/api/v1/piggy_banks/${piggy.id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(() => {
            handleReduxDelete(piggy.id)
        })
    }
    

/*************  JSX  *************/

    return (
        <div className="edit-menu">
             <Planet
                    
                    centerContent={<Icon  icon={leadPencil} color="grey" height="25px" />}
                    hideOrbit
                    autoClose
                    orbitRadius={40}
                    bounceOnClose
                    rotation={45}
                    bounceDirection="BOTTOM"
                >
                   
                    <Icon 
                        className="edit-option"  
                        icon={cashRemove} 
                        color="orange" height="2em" 
                        onClick={() => setModalRemoveShow(true)}/> 
                    <Icon 
                        className="edit-option" 
                        icon={cashPlus} 
                        color="green" 
                        height="2em" 
                        onClick={() => setModalAddShow(true)}/> 
                    <Icon 
                        className="edit-option" 
                        onClick={handleRemove} 
                        icon={deleteForeverOutline} 
                        color="red" 
                        height="2em" 
                        />
                     <div />
                    <div />
                    <div /> 
                </Planet>

                <PiggyAddMoney piggy={piggy} show={modalAddShow} onHide={() => setModalAddShow(false)} />
                <PiggySubtractMoney piggy={piggy} show={modalRemoveShow} onHide={() => setModalRemoveShow(false)} />

        </div>
    )
}

export default EditTileMenu
