import React from 'react';
import { Button, PageNumber, PaginationWrapper } from './styled';

const Pagination = ({ page, totalPages, setCurrentPage }) => {
    return (
        <PaginationWrapper>
            <Button disabled={page === 1} onClick={() => setCurrentPage(1)}>&lt; First</Button>
            <Button disabled={page === 1} onClick={() => setCurrentPage(currentPage => currentPage - 1)}>&lt; Previous</Button>
            <PageNumber>Page {page} of {totalPages}</PageNumber>
            <Button disabled={page === totalPages} onClick={() => setCurrentPage(currentPage => currentPage + 1)}>Next &gt;</Button>
            <Button disabled={page === totalPages} onClick={() => setCurrentPage(totalPages)}>Last &gt;</Button>
        </PaginationWrapper>
    )
}

export default Pagination;