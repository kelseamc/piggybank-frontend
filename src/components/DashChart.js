import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useSelector } from 'react-redux'


function DashChart() {

    const piggys = useSelector((state) => state.user.piggys)
  

    let personal = 0
    let emergency = 0
    let retirement = 0

    piggys.forEach((pig) => {
        if (pig.category === "Personal"){
             personal += pig.current_balance
         }
        else if (pig.category === "Emergency"){
                    emergency += pig.current_balance
        }
        else if (pig.category === "Retirement"){
                    retirement += pig.current_balance
        }
     
     })


    const data = {
        labels: ['Personal', 'Emergency', 'Retirement'],
        datasets: [
            {
            label: '# of Votes',
            data: [personal , emergency , retirement],
            backgroundColor: [
                'rgb(138, 43, 226)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
             
            ],
            borderColor: [
                'rgb(138, 43, 226)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
            },
            
        ],
        
    }
    return (
        <div>
            <Doughnut data={data} />
        </div>
    )
}

export default DashChart
