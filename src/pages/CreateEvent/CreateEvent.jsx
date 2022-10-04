import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './CreateEvent.css'
import { useData } from "../../DataContext";
import MainContainer from '../../components/MainContainer'

const CreateEvent = () => {
    const navigate = useNavigate()
    const { data, setValues } = useData()

    const { register, handleSubmit, control, formState: { errors }, watch } = useForm({
        mode: 'onBlur',
        defaultValues: {
            eventName: data && data.eventName,
            hostName: data && data.hostName,
            location: data.location,
            startDate: data.startData,
            endDate: data.endData,
            picture: data.picture
        }
    })

    const onSubmit = data => {
        console.log(data)
        navigate('/result')
        setValues(data)
        Swal.fire({ title: "Cool🎊🎊", icon: 'success', confirmButtonText: 'Amazing', text: 'Can`t wait for your event😍' })
    }

    return (
        <MainContainer>
            <h3>😍Let's create something awesome</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="input-group m-5">
                    <span className="input-group-text" id="basic-addon1">✨</span>
                    <input type="text" className="form-control" placeholder="Event Name" {...register('eventName', { required: "Required field, please.." })} />
                    {errors.eventName && errors.eventName.type === 'required' && <div className="invalid-feedback">
                        {errors.eventName.message}
                    </div>}

                </div>
                <div className="input-group m-5">
                    <span className="input-group-text" id="basic-addon2">💁‍♂️💁‍♀️</span>
                    <input {...register('hostName', { required: 'Required field,please...' })} type="text" className="form-control" placeholder="Host Name" aria-label="Host Name" aria-describedby="basic-addon2" />
                </div>
                <div className="input-group m-5">
                    <span className="input-group-text" id="basic-addon2">🏨</span>
                    <input {...register('location', { required: 'Required field,please...' })} type="text" className="form-control" placeholder="Location" aria-label="Location" aria-describedby="basic-addon2" />
                </div>


                <div style={{ display: 'flex', width: '73rem' }} className='m-5'>
                    <Controller

                        control={control}
                        name='startDate'
                        render={({ field }) => (
                            <DatePicker
                                className='date'
                                showTimeSelect={true}
                                placeholderText='Select start date'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name='endDate'
                        render={({ field }) => (
                            <DatePicker
                                className='date'
                                showTimeSelect={true}
                                placeholderText='Select end date'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                            />
                        )}
                    />
                </div>

                <input type="file" {...register('picture', { required: true })} name='picture' className="form-control m-5" />
                <button type='submit' className='btn btn-primary' style={{ float: 'right', marginTop: '2rem', width: '10rem' }}>Next 👉</button>
            </form>
        </MainContainer>
    )
}

export default CreateEvent