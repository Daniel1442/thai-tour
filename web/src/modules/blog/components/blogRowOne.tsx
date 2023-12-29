import React from 'react';
import {useRouter} from "next/router";
import {ArticleRow} from "../models";

interface ComponentProps {
    article: ArticleRow,
    index: number
}

const ArticleItem: React.FC<ComponentProps> = ({article, index}) => {
    const router = useRouter();
    const redirectToDetail = (articleId: string) => {
        router.push(`/article?id=${articleId}`)
    }
    return (
        <div className={`col-lg-${index !== 0 && (index + 1) % 2 == 0 ? '3' : '3'} col-sm-12 my-3`}>
            <figure className="figure big w-100 " onClick={() => redirectToDetail(article && article.id)}>
                <img  className={'zoomInImg figure-img img-fluid'}
                     src={article && article.image}/>
                <div className={'w-100 h-100 blackGradient d-block cursor-pointer'}/>
                <figcaption className="figure-caption textInImg">{article && article.name}</figcaption>
            </figure>
        </div>
    )
}
export default ArticleItem;