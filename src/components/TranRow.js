import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function TranRow({transaction}) {
    return (
        <tr>
                <td>
                    <Button variant="outline-dark">X</Button>
                </td>
                <td>{transaction.account_id}</td>
                <td>{transaction.total}</td>
                <td>{transaction.type}</td>
        </tr>
    )
}

export default TranRow
