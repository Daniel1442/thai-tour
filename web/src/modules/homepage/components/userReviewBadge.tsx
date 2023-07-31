import React, {useRef, useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFaceAngry,
    faFaceFrown,
    faFaceGrinHearts,
    faFaceGrinWide,
    faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

interface ComponentProps {
    review: number
}

const UserReviewBadge: React.FC<ComponentProps> = ({review}) => {

    return (
        <>
            {review && review > 4 && <p><FontAwesomeIcon icon={faFaceGrinHearts}
                                      
                                                          style={{
                                                              paddingRight: '4px',
                                                              color: '#0d6efd'
                                                          }}/> {review}/ 5</p>}
            {review && review > 3 && review <= 4 && <p><FontAwesomeIcon icon={faFaceGrinWide}
                                                                       style={{
                                                                           paddingRight: '4px',
                                                                           color: '#0d6efd'
                                                                       }}/> {review}/ 5</p>}
            {review && review > 2 && review <= 3 && <p><FontAwesomeIcon icon={faFaceSmile}
                                                                       style={{
                                                                           paddingRight: '4px',
                                                                           color: '#0d6efd'
                                                                       }}/> {review}/ 5</p>}
            {review && review > 1 && review <= 2 && <p><FontAwesomeIcon icon={faFaceFrown}
                                                                       style={{
                                                                           paddingRight: '4px',
                                                                           color: '#0d6efd'
                                                                       }}/> {review}/ 5</p>}
            {review && review > 0 && review <= 1 && <p><FontAwesomeIcon icon={faFaceAngry}
                                                                       style={{
                                                                           paddingRight: '4px',
                                                                           color: '#0d6efd'
                                                                       }}/> {review}/ 5</p>}
        </>
    )
}
export default UserReviewBadge;
