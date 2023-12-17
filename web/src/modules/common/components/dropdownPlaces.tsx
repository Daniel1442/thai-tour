import React, {useEffect, useRef, useState} from 'react';


interface DropdownProps {
    name: string
}

const DropdownPlaces: React.FC<DropdownProps> = ({name}) => {

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
            <a href="#" className="nav-item nav-link font-white dropdown-toggle" onClick={() => setToggle(!toggle)}
               data-bs-toggle="dropdown" aria-expanded="false">{name}</a>
            <ul className={`dropdown-menu background-blue ${toggle ? 'show' : ''}`} ref={wrapperRef}>
                <li><a className="dropdown-item font-white" href="/catalog">Zobrazit vše</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Bangkok a okolí</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Pattaya a okolí</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Koh Samui</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Phuket</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Phi Phi</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Koh Samet</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Krabi</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Hua Hin</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Koh Lanta</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Koh Phangan</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Koh Chang</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"> Koh Kood</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"> Khao Lak</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Koh Lipe</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Koh Tao</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Koh Yao</a></li>
                <li><a className="dropdown-item font-white" href="/catalog">Chiang Mai</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"> Chiang Rai</a></li>
            </ul>
        </div>
    )
}
export default DropdownPlaces;