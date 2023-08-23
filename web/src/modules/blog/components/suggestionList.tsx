import React, {useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useRouter} from "next/router";

interface ComponentProps {
    text: string;
    id: string;
    img: string;
}

const SuggestionList: React.FC<ComponentProps> = ({text, id, img}) => {
    const router = useRouter();
    const redirectToDetail = (articleId: string) => {
        router.push(`/article?id=${articleId}`)
    }
    return (
        <div className={'suggestionItem col-lg-3 col-sm-12  d-flex justify-content-center'}>
            <figure className="figure big w-100 " onClick={() => redirectToDetail(id)}>
                <img className={'zoomInImg figure-img img-fluid'}
                     src={img}/>
                <div className={'w-100 h-100 blackGradient d-block cursor-pointer'}/>
                <figcaption className="figure-caption textInImg">{text}</figcaption>
            </figure>
        </div>
    )
}
export default SuggestionList;
