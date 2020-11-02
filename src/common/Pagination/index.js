import React from 'react';
import { Button, PageNumber, PaginationWrapper } from './styled';

const Pagination = (props) => {
    return(
        <PaginationWrapper>
            <Button>&lt; First</Button>
            <Button>&lt; Previous</Button>
                <PageNumber>Page {props.page} of {props.totalPage}</PageNumber>
            <Button>Next &gt;</Button>
            <Button>Last &gt;</Button>
        </PaginationWrapper>
    )
}

export default Pagination;