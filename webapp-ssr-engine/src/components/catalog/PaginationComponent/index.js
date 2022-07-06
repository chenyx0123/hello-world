import React from "react";

import Link from "next/link";

import { Link as MuiLink, Pagination, PaginationItem } from "@mui/material";

const PaginationComponent = ({
  hasNextPage,
  page,
  paginationHref,
  ...props
}) => (
  <Pagination
    count={page + (hasNextPage ? 1 : 0)}
    page={page}
    boundaryCount={2}
    color="primary"
    shape="rounded"
    variant="outlined"
    renderItem={(item) =>
      !paginationHref || !item.page || item.disabled ? (
        <PaginationItem
          {...item}
          type={item.type === "next" ? "end-ellipsis" : item.type}
        />
      ) : (
        <Link href={paginationHref(item.page)} passHref>
          <MuiLink underline="none">
            <PaginationItem
              {...item}
              type={item.type === "next" ? "end-ellipsis" : item.type}
            />
          </MuiLink>
        </Link>
      )
    }
    {...props}
  />
);

export default PaginationComponent;
