import React, {useContext, useEffect, useState} from "react";
import Navigation from '../modules/common/components/navigation';
import SearchBar from "../modules/homepage/components/searchBar";
import Carousel from "../modules/homepage/components/carousel";
import SuggestionItem from "../modules/homepage/components/suggestionItem";
import SuggestionArticle from "../modules/homepage/components/suggestionArticle";
import Footer from "../modules/common/components/footer";
import InformationImageCard from "../modules/destination/components/informationImageCard";
import DestinationSideBar from "../modules/destination/components/destinationSidebar";
import AboutDestination from "../modules/destination/components/aboutDestination";
import ImportantInfo from "../modules/destination/components/importantInfo";
import Header from "../modules/common/components/header";
import {useRouter} from "next/router";
import {getDetail, getFavoritePlaces} from "../modules/homepage/action";
import {PlaceDetail, PlaceRow} from "../modules/homepage/models";
import {usePlaceContext} from "../hooks/usePlaceContext";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import Loader from "../modules/common/components/loader";
import BlogParagraph from "../modules/blog/components/blogParagraph";
import BlogSidebar from "../modules/blog/components/blogSidebar";
import AboutAuthor from "../modules/blog/components/aboutAuthor";
import SuggestionList from "../modules/blog/components/suggestionList";

const Article = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    const router = useRouter();
    const {id} = router.query;

    const {
        article,
        fetchBlog
    } = useContext(PlaceContext) as PlaceContent;


    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    useEffect(() => {
        fetchBlog(id as string)
    }, [id]);

    return <div className={'homepage'}>
        <Header/>
        <Navigation/>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-8 col-sm-12'}>
                    <div className={'row my-5 d-flex justify-content-center'}>
                        {article.contents && article.imageList && (article.contents.length > 0 && article.imageList.length > 0) ? Object.entries(article.contents).map(([id, content], index) => {
                            return <BlogParagraph image={article.imageList[index].value}
                                                  articleHeading={content.articleHeading}
                                                  articleParagraph={content.value} index={index} length={article.contents.length}/>
                        }) : ''}
                    </div>
                </div>
                <div className={'col-lg-4 col-sm-12'}>
                    <div className={'row my-5 d-flex justify-content-center'}>
                    <BlogSidebar/>
                    </div>
                </div>
            </div>
            <div className={'col-lg-12 col-sm-0'}>
                <AboutAuthor name={'Pepa Josef'} dateOfRelease={'20.7.2023'} tags={[]} authorImage={'https://dcontent.inviacdn.net/shared/img/invia-app-100x100/2017/6/26/m0/406721.jpg'}/>
            </div>
            <div className={'col-12 mb-3'}>
             <h3>Mohlo by vás zajímat</h3>
            </div>
            <div className={'row'}>
                <SuggestionList img={'https://dcontent.inviacdn.net/shared/img/web-270x300/2023/8/7/m0/1817762.jpg'} text={'Zažijte Porto: Přístav šarmu s vůní vína '} id={'99583e01-b43a-43aa-8b60-f68fa6f4befd'}/>
                <SuggestionList img={'https://dcontent.inviacdn.net/shared/img/web-270x300/2023/8/8/m0/1819323.jpg'} text={'Exotické ráje aneb Kam uletět za sluncem, až skončí léto    '} id={'fbadeb10-63aa-4976-b224-86ca0a944338'}/>
                <SuggestionList img={'https://dcontent.inviacdn.net/shared/img/web-270x300/2023/8/8/m0/1819323.jpg'} text={'Alanya: Představujeme perlu Turecké riviéry '} id={'99583e01-b43a-43aa-8b60-f68fa6f4befd'}/>
                <SuggestionList img={'https://dcontent.inviacdn.net/shared/img/web-270x300/2023/8/3/m0/1815823.jpg'} text={'Stará Dubaj: Fascinující cesta do minulosti'} id={'3fdb3607-4031-4734-aea7-a5dd67dfb2b9'}/>
            </div>
        </div>
        <Footer href={''} contact={''}/>
    </div>
}

export default Article;