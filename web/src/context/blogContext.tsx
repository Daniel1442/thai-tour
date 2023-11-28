import * as React from "react";
import {createContext, useState} from "react";
import {ArticleDetail, ArticleFinderPayload, ArticleRow} from "../modules/blog/models";
import {filterBlog, getDetailBlog} from "../modules/blog/action";

export type ArticleContent = {
    article: ArticleDetail
    fetchBlog: (id: string) => void
    filterBlogs: (payload: ArticleFinderPayload) => void
    payloadBlog: ArticleFinderPayload | undefined
    setPayloadBlog:  (payload: ArticleFinderPayload) => void
    articleList: ArticleRow[]
}
export const ArticleContext = createContext<ArticleContent | null>(null);

const ArticleContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const [article, setArticle] = useState<ArticleDetail>({} as ArticleDetail)
    const [articleList, setArticleList] = useState<ArticleRow[]>([]);
    const [payloadBlog, setPayloadBlog] = useState<ArticleFinderPayload>()

    const fetchBlog = (id: string) => {
        getDetailBlog(id as string).then((place: any) => {
            setArticle(place.result)
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

    return <ArticleContext.Provider value={{
        article,
        fetchBlog,
        filterBlogs,
        payloadBlog,
        articleList,
        setPayloadBlog
    }}> {children}</ArticleContext.Provider>

}
export default ArticleContextProvider;
