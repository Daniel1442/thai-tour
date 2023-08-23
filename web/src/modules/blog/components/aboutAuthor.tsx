import React, {useContext, useEffect, useState} from "react";

interface BlogParagraphProps {
    name: string;
    dateOfRelease: string;
    tags: string[];
    authorImage: string;
}

const AboutAuthor: React.FC<BlogParagraphProps> = ({name, dateOfRelease, tags, authorImage}) => {

    return <div className={'row mb-5'}>
        <div className={'col-lg-1 ca'}>
            <img src={authorImage} className={'rounded-circle'}/>
        </div>
        <div className={'col-lg-4'}>
            <div className={'row mt-4'}>
                <div className={'col-lg-12'}>{name}</div>
                <div className={'col-lg-12'}>{dateOfRelease}</div>
            </div>
        </div>
        <div className={'col-lg-12 mt-3 d-flex'}>
            <span className={'me-3'}>Štítek: </span>
            <span className="badge rounded-pill bg-primary me-3">Jídlo a pití</span>
            <span className="badge rounded-pill bg-primary me-3">Novinky</span>
            <span className="badge rounded-pill bg-primary me-3">Památky</span>
        </div>
    </div>
}

export default AboutAuthor;
