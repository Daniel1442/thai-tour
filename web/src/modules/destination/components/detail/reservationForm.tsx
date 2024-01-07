import React, {useState} from 'react';
import {sendReservation} from "../../../homepage/action";
import {ReservationPayload} from "../../../homepage/models";

export interface ReservationFormProps {
    closeModal: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({closeModal}) => {
    const [state, setState] = useState({
        email: "",
        subject: "",
        text: ""
    });

    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        sendReservation(state as ReservationPayload).then((response) => {
            setSuccess(true)
            setError(false);
            setTimeout(() => {
                closeModal();
            }, 1500)
        }).catch((error) => {
            setError(true);
            setSuccess(false)
        })
    };


    return (
        <> {success ? <div className={'d-flex justify-content-center m-auto'}>
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Výborně!</h4>
                <p>Vaše nezávazná rezervace byla vytvořena. Následující komunikace bude přes e-mail.</p>
            </div>
            </div> :
            <>
                <form onSubmit={handleSubmit}>
                    {error &&
                        <div className="alert alert-danger" role="alert">
                        Odeslání se nepovedlo. Zkuste to prosím znovu
                    </div>}
                    <legend>Nezávazná poptávka</legend>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" required={true} name="email" id="disabledTextInput" className="form-control"
                               placeholder="jan.novak@email.cz" onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Předmět</label>
                        <input type="text" name="subject" required={true} id="disabledTextInput" className="form-control"
                               placeholder="Rezervace" onChange={handleInputChange}/>

                    </div>
                    <div className="mb-3">
                    <textarea id="disabledTextInput" required={true} name="text" className="form-control" style={{height: '200px'}}
                              onChange={handleInputChange}
                    />
                    </div>
                    <button type="submit" className="btn background-yellow font-white">Odeslat</button>
                </form>
            </>}
        </>
    )
}
export default ReservationForm;
