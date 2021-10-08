import React, { FC } from 'react';
import styled from './Pagination.module.scss';

interface IPagination {
    postsPerPage: number
    totalPosts: number,
    paginate: (number: number) => void;
}

const Pagination: FC<IPagination> = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers: Array<number> = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) { // Что бы посчитать все страницы
        pageNumbers.push(i);
    }

    return (
        <ul className={styled.pagination}>
            {pageNumbers.map(number => (
                <li key={number}  className={styled.pagination__item}>
                    <button onClick={() => paginate(number)} className={styled.pagination__link}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    )
};

export default Pagination;