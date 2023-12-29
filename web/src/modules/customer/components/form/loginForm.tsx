import React, {useState} from 'react';
import {logIn} from "../../action";
import {LoginPayload} from "../../model";
import {useLocalStorage} from "../../../../hooks/useLocalStorage";

export interface ReservationFormProps {
    closeModal: () => void;
}

const LoginForm: React.FC<ReservationFormProps> = ({closeModal}) => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState();
    const [registry, setRegistryStore] = useLocalStorage("LOGIN_DATA", [])

    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        logIn(state as LoginPayload).then((response) => {
            if (!response.success) {
                setError(true);
                setErrorMsg(response.flashes[0].message)
                return;
            }
            setSuccess(true)
            setError(false);
            setRegistryStore(response.result)
            setTimeout(() => {
                closeModal();
                window.location.reload();
            }, 1500)
        }).catch((error) => {
            setError(true);
            setErrorMsg(error.flashes[0].message)
            setSuccess(false)
        })
    };


    return (
        <> {success ? <div className={'d-flex justify-content-center m-auto'}>
                <div className="alert alert-success w-100" role="alert">
                    <h4 className="alert-heading">Výborně!</h4>
                    <p>Přihlášeno</p>
                </div>
            </div> :
            <>
                <form onSubmit={handleSubmit}>
                    {error &&
                        <div className="alert alert-danger w-100" role="alert">
                            {errorMsg}
                        </div>}
                    <div className="mb-3 mt-3">
                        <label className="form-label">Email</label>
                        <input type="email" required={true} name="email" className="form-control"
                               placeholder="jan.novak@email.cz" onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Heslo</label>
                        <input type="password" name="password" required={true} className="form-control" onChange={handleInputChange}/>

                    </div>
                    <button type="submit" className="btn w-100 background-yellow font-white"> Přihlásit</button>
                </form>
            </>}
        </>
    )
}
export default LoginForm;
