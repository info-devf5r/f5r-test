import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2';

const Essaie = () => {

    const [data, setData] = useState({
        date: new Date().toLocaleDateString("en-US"),
        name: "",
        birthday: "",
        email: "",
        number: ""
    })

    const { name, birthday, email, number, date } = data

    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await fetch("https://v1.nocodeapi.com/hgm/google_sheets/UrYQlTpGeSyFOyDC?tabId=Responses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([[date, name, birthday, email, number]]),
            })
        } catch (err) {
            console.log(err)
        }
    }

    function sumbited() {
        console.log("Sumbited");
        Swal.fire({
            title: 'Merci ❤',
            text: 'Un agent vas vous contacter sur whatsapp ou mobile dans quelque instants!',
            background: '#171717',
            color: 'white',
            showConfirmButton: false,
        })
        setTimeout(function () { window.location.replace("http://192.168.100.6:5173/iptv/");; }, 3000);
    }

    return (

<div className='essaieContainer'>
<div className='essaieLeft'>
                    <h1 className='formPageTitle'>
                        Essaie <span>24h</span> gratuit
                    </h1>
                    <p className='remplir'>Remplissez le formulaire</p>
                    <p className='essaiInfo'>
                        Beneficier de tous les avantages pendant <span>24h</span>
                    </p>
                    <p className='essaiInfo'>
                    Apres la validation, un agent vas vous envoyer votre code d`essaie.</p> 
                    <p className='essaiInfo'>N'hesiter pas de nous <span>contacter</span> pour plus d'information!</p>
                    
</div>
<div className='essaieRight'>
<form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className='group'>
                            <input type="text" name="name" placeholder='Nom et Prenom' value={name} onChange={handleChange} required />
                        </div>
                        <div className='group'>
                        <input type="date" name="birthday" placeholder="Date de naissance" value={birthday} onChange={handleChange} required />
                        </div>
                        <div className='group'>
                        <input type="number" name="number" placeholder='Numero whatsapp' value={number} onChange={handleChange} required /> 
                        </div>
                        <div className='group'>
                        <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} required />
                        </div>
                        <div className='essaiebutton'>
                            <button className='formSubmit' onClick={() => sumbited()}>Valider</button>
                        </div>
                    </div>
</form>
</div>
</div>

    )
}

export default Essaie