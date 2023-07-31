import React from "react";

interface ComponentProps {
    points: string[]
    sizeD: string
    sizeM: string
}

const BulletList: React.FC<ComponentProps> = ({points, sizeD, sizeM}) => {
    return (
        <div
            className={`col-lg-${sizeD} col-sm-${sizeM}`}>
            <div className=' entry-content'>
                {points.map((element, index) => {
                    return <p>&#x2714; {element}</p>
                })}
            </div>
        </div>
    )
}
export default BulletList
