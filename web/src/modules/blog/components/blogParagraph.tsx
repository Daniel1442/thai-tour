import React from "react";
import {Alert} from "react-bootstrap";
import {useRouter} from "next/router";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface BlogParagraphProps {
    image: string;
    articleHeading: string;
    articleParagraph: string;
    index: number;
    length: number;
}

const BlogParagraph: React.FC<BlogParagraphProps> = ({image, articleHeading, articleParagraph, index, length}) => {
    const router = useRouter();
    const redirectToDetail = (articleId: string) => {
        router.push(`/article?id=${articleId}`)
    }
    return <>
        {index === (length - 1) ?
            <div className="alert alert-dark cursor-pointer" role="alert">
                <div className={'row'}>
                    <div className={'col-2 me-3'}>

                <LazyLoadImage  src={'https://dcontent.inviacdn.net/shared/img/affil-450x300/2023/6/29/m0/1782861.jpg'} className={'me-3 rounded'} width={135} height={90} alt={''}/>
                    </div>
                    <div className={'col-9'}>
                        <span style={{fontSize: '15px'}}>Čtěte také</span>
                        <Alert.Heading onClick={() => redirectToDetail('fbadeb10-63aa-4976-b224-86ca0a944338')}><i>Omamná chuť Turecka na vašem talíři</i></Alert.Heading>
                    </div>
                </div>
            </div> : ''
        }
        <div className={' col-sm-12  mt-3'}>
            <h3>{articleHeading}</h3>
        </div>
        <div className={' col-sm-12 mt-2'}>
            <LazyLoadImage  src={image} className={'imageFull'}/>
        </div>
        <div className={'col-sm-12 mt-2 mb-3'}>
            {index === 0 ? <b className={''}>
                    {articleParagraph}
                </b>

                : <p>
                    {articleParagraph}
                </p>
            }
        </div>
    </>
}

export default BlogParagraph;
