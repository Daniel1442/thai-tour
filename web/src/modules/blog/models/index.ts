export interface ArticleDetail {
    id: string;
    name: string;
    image: string;
    isActive: boolean;
    dateOfRelease: Date;
    contents: ArticleDetailContent[];
    imageList: ArticleDetailImages[];
    tags: ArticleDetailTag[];
}

export interface ArticleRow{
    id: string;
    name: string
    image: string
    tagId: string
    isActive: boolean
    dateOfRelease: Date | null

}

export interface ArticleFinderPayload{
    tagId: string | null
}

interface ArticleDetailContent {
    value: string;
    articleHeading: string;
    priority: number;
    id: string;
    articleId: string;
}

interface ArticleDetailImages {
    value: string;
    priority: number;
    id: string;
    articleId: string;
}

interface ArticleDetailTag {
    id: string;
    name: string;
    isActive: boolean;
}