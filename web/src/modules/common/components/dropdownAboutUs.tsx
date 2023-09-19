import React, {useEffect, useRef, useState} from 'react';


interface DropdownProps {
    name: string
    link: string
}

const DropdownAboutUs: React.FC<DropdownProps> = ({name,link}) => {

    const [toggle, setToggle] = useState(false)
    const useOutsideAlerter = (ref: any) => {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setToggle(false)
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div className={'dropdown'}>
            <a className="nav-item nav-link font-white dropdown-toggle" onClick={() => setToggle(!toggle)}  data-bs-toggle="dropdown" aria-expanded="false">{name}</a>
            <ul className={`dropdown-menu background-blue ${toggle ? 'show':''}`} ref={wrapperRef}>
                <li><a className="dropdown-item font-white" href={link}>{name}</a></li>
                <li><a className="dropdown-item font-white" href="/aboutCompany">O společnosti</a></li>
                <li><a className="dropdown-item font-white" href="/invoice">Fakturační údaje</a></li>
                <li><a className="dropdown-item font-white" href="/paymentMethods">Možnosti platby</a></li>
                <li><a className="dropdown-item font-white" href="/portfolio">Portfolio služeb</a></li>
                <li><a className="dropdown-item font-white" href="/contacts">Kontakty</a></li>
            </ul>
        </div>
    )
}
export default DropdownAboutUs;