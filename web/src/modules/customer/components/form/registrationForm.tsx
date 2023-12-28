import React, {useState} from 'react';
import {logIn, register} from "../../action";
import {LoginPayload, RegisterPayload} from "../../model";

export interface ReservationFormProps {
    closeModal: () => void;
}

const RegistrationForm: React.FC<ReservationFormProps> = ({closeModal}) => {
    const [state, setState] = useState({
        surname: "",
        lastname: "",
        email: "",
        password: "",
        passwordRepeated: ""
    });

    const [success, setSuccess] = useState<boolean>(false);
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };


    const validatePassword = (password: string, repeatedPassword: string) => {
        if (password != repeatedPassword) {
            setError(true);
            setErrorMsg("Hesla se neshodují. Zkuste to prosím znovu.")
            return false;
        }
        return true;

    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (validatePassword(state.password, state.passwordRepeated)) {
            register(state as RegisterPayload).then((response) => {
                setSuccess(true)
                setError(false);
                setTimeout(() => {
                    closeModal();
                }, 1500)
            }).catch((error) => {
                setError(true);
                setErrorMsg(error.flashes[0].message)
                setSuccess(false)
            })
        }
    };


    return (
        <> {success ? <div className={'d-flex justify-content-center m-auto'}>
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Výborně!</h4>
                    <p>Přihlášeno</p>
                </div>
            </div> :
            <>
                <form onSubmit={handleSubmit}>
                    {error &&
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>}
                    <div className="mb-3">
                        <label className="form-label">Jméno</label>
                        <input type="email" required={true} name="surname" className="form-control"
                               placeholder="Jan" onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Příjmení</label>
                        <input type="text" required={true} name="lastname" className="form-control"
                               placeholder="Novák" onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" required={true} name="email" className="form-control"
                               placeholder="jan.novak@email.cz" onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Heslo</label>
                        <input type="password" name="password" required={true} className="form-control"
                               placeholder="Rezervace" onChange={handleInputChange}/>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Heslo znovu</label>
                        <input type="password" name="password" required={true} className="form-control"
                               placeholder="Rezervace" onChange={handleInputChange}/>

                    </div>
                    <div className="mb-3">
                        <input className="form-check-input" type="checkbox" onChange={() => setConfirmed(!confirmed)}
                               required={true}/>
                        <label className="form-check-label">
                            Vytvořením registrace souhlasíte s &nbsp;
                            <a target={"_blank"}>
                                Obchodními podmínkami
                            </a> a&nbsp;
                            <a target={"_blank"}>
                                Pravidly ochrany osobních údajů</a>.
                        </label>
                    </div>
                    <button type="submit" className="btn background-yellow font-white">Zaregistrovat se</button>
                </form>
            </>}
        </>
    )
}
export default RegistrationForm;
