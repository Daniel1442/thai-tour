import * as React from 'react';
import {createContext, useEffect, useState} from 'react';
import {filterPlace, getDetail} from '../modules/homepage/action';
import {PlaceDetail, PlaceFinderPayload, PlaceRow} from "../modules/homepage/models";
import {ArticleDetail, ArticleFinderPayload, ArticleRow} from "../modules/blog/models";
import {filterBlog, getDetailBlog} from "../modules/blog/action";


export type PlaceContent = {
    place: PlaceDetail
    article: ArticleDetail
    fetchPlace: (id: string) => void
    fetchBlog: (id: string) => void
    filterPlaceF: (payload: PlaceFinderPayload) => void
    filterBlogs: (payload: ArticleFinderPayload) => void
    payload: PlaceFinderPayload | undefined
    payloadBlog: ArticleFinderPayload | undefined
    setPayloadBlog:  (payload: ArticleFinderPayload) => void
    setPayload: (payload: PlaceFinderPayload) => void
    placeDescriptionType : string,
    setPlaceDescriptionType: (type: string) => void
    placeList: PlaceRow[]
    articleList: ArticleRow[]
}
export const PlaceContext = createContext<PlaceContent | null>(null);


const PlaceContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const [place, setPlace] = useState<PlaceDetail>({} as PlaceDetail)
    const [article, setArticle] = useState<ArticleDetail>({} as ArticleDetail)
    const [payload, setPayload] = useState<PlaceFinderPayload>()
    const [payloadBlog, setPayloadBlog] = useState<ArticleFinderPayload>()
    const [placeList, setPlaceList] = useState<PlaceRow[]>([]);
    const [articleList, setArticleList] = useState<ArticleRow[]>([]);
    const [placeDescriptionType, setPlaceDescriptionType] = useState<string>('ABOUT');
    const fetchPlace = (id: string) => {
        getDetail(id as string).then((place: any) => {
            setPlace(place.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    const fetchBlog = (id: string) => {
        getDetailBlog(id as string).then((place: any) => {
            setArticle(place.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log(payload)
    }, [payload]);

    const filterPlaceF = (payload: PlaceFinderPayload) => {
        console.log(payload)
        filterPlace(payload as PlaceFinderPayload).then((place: any) => {
            setPlaceList(place.result.content)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    const filterBlogs = (payload: ArticleFinderPayload) => {
        filterBlog(payload as ArticleFinderPayload).then((place: any) => {
            setArticleList(place.result.content)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    return <PlaceContext.Provider value={{
        place,
        article,
        placeDescriptionType,
        setPlaceDescriptionType,
        fetchPlace,
        fetchBlog,
        filterPlaceF,
        filterBlogs,
        payload,
        payloadBlog,
        setPayload,
        articleList,
        setPayloadBlog,
        placeList
    }}> {children}</PlaceContext.Provider>
}

export default PlaceContextProvider;