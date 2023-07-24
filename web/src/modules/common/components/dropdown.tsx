import React, {useEffect, useRef, useState} from 'react';


interface DropdownProps {
    name: string
}

const Dropdown: React.FC<DropdownProps> = ({name}) => {

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
            <a href="#" className="nav-item nav-link font-white dropdown-toggle" onClick={() => setToggle(!toggle)}  data-bs-toggle="dropdown" aria-expanded="false">{name}</a>
            <ul className={`dropdown-menu ${toggle ? 'show':''}`} ref={wrapperRef}>
                <li><a className="dropdown-item" href="/localPlacesDescription">Popis lokalit</a></li>
                <li><a className="dropdown-item" href="/thaiWeather">Počasí v Thajsku</a></li>
                <li><a className="dropdown-item" href="/thaiTours">Výlety v Thajsku</a></li>
                <li><a className="dropdown-item" href="/thaiGolf">Golf v Thajsku</a></li>
                <li><a className="dropdown-item" href="/thaiRecommendation">Co navštívit v Thajsku</a></li>
            </ul>
        </div>
    )
}
export default Dropdown;