import React from 'react';

import styles from './Pagination.module.scss'
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../../redux/filter/slice";


const Pagination: React.FC = () => {
    const dispatch = useDispatch();

    const handlePageClick = (event: any) => {
        dispatch(setCurrentPage(event.selected + 1))
    };

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={2}
            previousLabel="<"
        />
    );
};

export default Pagination;
