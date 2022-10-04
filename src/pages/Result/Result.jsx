import React, { useState } from 'react'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../DataContext'
import { format } from 'date-fns';

import './Result.css'
import MainContainer from './../../components/MainContainer';

const Result = () => {
    const [success, setSuccess] = useState(true)
    const { data, setValues } = useData()
    const navigate = useNavigate()
    console.log(data)
    return (
        <MainContainer>
            <div>Result</div>
            {success && <Confetti numberOfPieces={200} />}

            <div className="card mb-3">
                <img src={data.picture[0].name} className="card-img-top" alt={data.picture[0].name} />
                <div className="card-body">
                    <h5 className="card-title">🎉{data.eventName}</h5>
                    <p className="card-text">🦄 Hosted by {data.hostName}</p>
                    <p className="card-text">🏙 Location: {data.location}</p>

                    <p className="card-text">⏲ Start {format(new Date(data.startDate), 'kk:mm dd/MM/yyy')} <strong>until</strong>   {format(new Date(data.endDate), 'kk:mm dd/MM/yyy')} </p>
                </div>
            </div>
            <span>Forgot something? </span>
            <button className='btn btn-primary' onClick={() => navigate(-1)}>Go back</button>
        </MainContainer>
    )
}

export default Result