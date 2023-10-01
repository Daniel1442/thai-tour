import React from 'react';
import {useRouter} from "next/router";
import {LazyLoadImage} from "react-lazy-load-image-component";

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
                <LazyLoadImage  className={'zoomInImg figure-img img-fluid'}
                     src={img}/>
                <div className={'w-100 h-100 blackGradient d-block cursor-pointer'}/>
                <figcaption className="figure-caption textInImg">{text}</figcaption>
            </figure>
        </div>
    )
}
export default SuggestionList;
