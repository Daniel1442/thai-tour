import React, {useContext, useEffect} from "react";
import Navigation from '../modules/common/components/navigation';
import Footer from "../modules/common/components/footer";
import Header from "../modules/common/components/header";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import {useRouter} from "next/router";
import {ArticleFinderPayload} from "../modules/blog/models";
import ArticleItem from "../modules/blog/components/blogRowOne";
import MobileFooter from "../modules/common/components/mobileFooter";
import MobileNavigation from "../modules/common/components/mobileNavigation";

const Blog = () => {
    const router = useRouter()

    const {
        filterBlogs,
        payloadBlog,
        setPayloadBlog,
        articleList
    } = useContext(PlaceContext) as PlaceContent;

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    const setFilterArticle = (filterPayload: ArticleFinderPayload) => {
        setPayloadBlog({tagId: filterPayload.tagId as string})
        filterBlogs({tagId: filterPayload.tagId as string})
    }

    useEffect(() => {
        if (payloadBlog == null) {
            filterBlogs({tagId: null})
        } else {
            filterBlogs(payloadBlog as ArticleFinderPayload)
        }
        console.log(articleList)
    }, [router]);


    return <div className={'homepage'}>
            <Header/>
        <Navigation/>
        <MobileNavigation/>
        <div className={'container mt-5'}>
            <div className={'row'}>
                <h3>Nejnovější články</h3>
            </div>
            <div className={'row'}>
                <div className="btn-toolbar">
                    <div className="btn-group me-2">
                        <button type="button" className="btn background-blue font-white"
                                onClick={() => setFilterArticle({tagId: '61047694-7742-476b-b9e9-a069397a3b8d'})}> Jídlo
                            a pití
                        </button>
                    </div>
                    <div className="btn-group me-2">
                        <button type="button" className="btn background-blue font-white"
                                onClick={() => setFilterArticle({tagId: '62e349ce-8ae8-44d3-b894-7a62079df24c'})}>Památky
                        </button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn background-blue font-white"
                                onClick={() => setFilterArticle({tagId: '8245a2ee-8b65-4293-9441-56d54ef84628'})}>Novinky
                        </button>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                {articleList.length > 0 ? Object.entries(articleList).map(([id, article], index) => {
                    return (
                        <ArticleItem article={article} index={index}/>

                    )
                }) : ''}
                {articleList.length > 0 ? Object.entries(articleList).map(([id, article], index) => {
                    return (
                        <ArticleItem article={article} index={index}/>

                    )
                }) : ''}
                <>
                    {articleList.length > 0 ? Object.entries(articleList).map(([id, article], index) => {
                        return (
                            <ArticleItem article={article} index={index}/>

                        )
                    }) : <div className="alert alert-danger mt-3" role="alert">
                        <h4 className="alert-heading">Bohužel!</h4>
                        <p>Nepodařilo najít odpovídající lokalitu.</p>
                        <hr/>
                        <p className="mb-0">Zkuste upravit své filtry</p>
                    </div>
                    }
                </>
            </div>
        </div>
           <Footer href={''} contact={''}/> 
        <MobileFooter href={''} contact={''}/>
    </div>
}

export default Blog;
