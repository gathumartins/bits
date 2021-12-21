import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import * as newsStyles from './News.module.css';
function NewsComp({ excerpt, newsTitle, newsDate, imgSrc, altText, newsLink }) {
    return (
        <div className={`${newsStyles.singleNews}`}>
            <div className={`shadow-md relative ${newsStyles.singleNewsInn}`}>
                <h6 className="text-right">{newsDate}</h6>
                <div className={`${newsStyles.singleCont}`}>
                    <div className={newsStyles.newsexcerpt}>
                        <h3>{newsTitle}</h3>
                        <div className={newsStyles.excerPad} dangerouslySetInnerHTML={{ __html: `${excerpt} ....` }}></div>
                        <Link to={newsLink}>Read more</Link>
                    </div>
                    <figure className={newsStyles.fig}>
                        <GatsbyImage image={imgSrc} alt={altText} className="object-cover w-full" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default NewsComp
