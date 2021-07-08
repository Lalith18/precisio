import React,{useState} from 'react';
import logo from '../../data/logo.png'
import './ModalOverlay.styles.css'

const ModalOverlay = () => {

    const [details, setDetails] = useState({name: '', email: '', phone: '', publicity: 'friends', others: ''})

    const setPublicity = (option) => {
        setDetails((prevState) => {
            return {...prevState, publicity: option}
        })
    }

    const setName = (event) => {
        setDetails((prevState) => {
            return {...prevState, name: event.target.value}
        })
    }

    const setEmail = (event) => {
        setDetails((prevState) => {
            return {...prevState, email: event.target.value}
        })
    }

    const setPhone = (event) => {
        setDetails((prevState) => {
            return {...prevState, phone: event.target.value}
        })
    }

    const setOthers = (event) => {
        setDetails((prevState) => {
            return {...prevState, others: event.target.value}
        })
    }

    return (
        <div className='modal'>
            <div className='modal-top' />
            <img className='modal-logo' src={logo} alt='Precisio' />
            <h1 className='modal-header'>SUBSCRIPTION FORM</h1>
            <div className='modal-options'>
                <h1 className='modal-title'>Your Name</h1>
                <input className='modal-input' type='text' name='name' autoComplete='off' value={details.name} onChange={setName} ></input>
                <h1 className='modal-title'>Your Email</h1>
                <input className='modal-input' type='email' name='email' autoComplete='off' value={details.email} onChange={setEmail} ></input>
                <h1 className='modal-title'>Your Phone no.</h1>
                <input className='modal-input' type='text' name='phone number' autoComplete='off' value={details.phone} onChange={setPhone} ></input>
                <h1 className='modal-title'>How did you get to know about us?</h1>
                <div className='radio-buttons'>
                    <div className='custom-radio-button' onClick={() => setPublicity('friends')}><div className={details.publicity === 'friends'? 'radio-on': ''} /></div>
                    <h1 className='custom-radio-label'>Friends</h1>
                    <div className='custom-radio-button' onClick={() => setPublicity('social-media')}><div className={details.publicity === 'social-media'? 'radio-on': ''} /></div>
                    <h1 className='custom-radio-label'>Social Media</h1>
                    <div className='custom-radio-button' onClick={() =>setPublicity('others')}><div className={details.publicity === 'others'? 'radio-on': ''} /></div>
                    <h1 className='custom-radio-label'>Others</h1>
                </div>
                <h1 className='modal-title'>If others please specify</h1>
                <input className='modal-input' type='text' name='others' autoComplete='off' value={details.others} onChange={setOthers} ></input>
                <button className='modal-button' >Subscribe</button>
            </div>
        </div>
    )
}

export default ModalOverlay;