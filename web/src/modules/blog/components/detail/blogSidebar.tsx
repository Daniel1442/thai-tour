import {useRouter} from "next/router";
import React from "react";
import SidebarPlace from "./sidebarPlace";
import {LazyLoadImage} from "react-lazy-load-image-component";

const BlogSidebar = () => {
    const router = useRouter();


    return <div className={'row d-flex justify-content-left'}>
        <div className={'col-12  mt-3'}>
            <h3>
                Líbí se vám tento článek?
            </h3>
        </div>
        <div className={'col-12'}>
            <p>
                Můžete ho snadno sdílet na sociálních sítích se svými přáteli.
            </p>
        </div>
        <div className={'col-12'}>
                <ul className="list-unstyled d-flex justify-content-left footer-m">
                    <li className=""><a className="link-dark" href="#">
                        <LazyLoadImage  src={'https://cdn-icons-png.flaticon.com/512/2168/2168336.png'}
                             width={30}
                             height={30}/>

                    </a></li>

                    <li className="ms-3"><a className="link-dark" href="#">
                        <LazyLoadImage  src={'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'}
                             width={30}
                             height={30}/>
                    </a></li>
                    <li className="ms-3"><a className="link-dark" href="#">
                        <LazyLoadImage  src={'https://cdn-icons-png.flaticon.com/512/1384/1384015.png'}
                             width={30}
                             height={30}/>
                    </a></li>
                </ul>
        </div>
        <div className={'col-12 mb-3'}>
            <h3>
                Přáli byste si navštívit tuto lokalitu? Stačí si vybrat.
            </h3>
        </div>
        <div className={'col-lg-8 ms-lg-5'}>

        <SidebarPlace date={'27.11. -29.11.2023'} name={'Blue Star'} image={'https://dcontent.inviacdn.net/shared/img/web-270x200/2022/1/26/d1/32151241.jpg'} price={6484} rating={4}/>
        <SidebarPlace date={'27.12. -29.12.2023'} name={'Red Star'} image={'https://dcontent.inviacdn.net/shared/img/web-270x200/2022/1/26/d1/32151241.jpg'} price={2484} rating={3}/>
        <SidebarPlace date={'27.10. -29.10.2023'} name={'Golden Star'} image={'https://dcontent.inviacdn.net/shared/img/web-270x200/2022/1/26/d1/32151241.jpg'} price={9484} rating={5}/>
        </div>
        <div className={'col-12 mt-3'}>
            <h3>
                Baví vás psát o zajímavých místech světa?
            </h3>
        </div>
        <div className={'col-12'}>
            <p>
                Hledáme nové nadšené kolegy do týmu, kteří by psali pro tento blog.
            </p>
            <a className={'btn-link'}>Chci psát pro tento magazín</a>
        </div>

    </div>
}

export default BlogSidebar;
