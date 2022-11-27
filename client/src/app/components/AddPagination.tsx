import { Box, Typography, Pagination } from "@mui/material";
import { MetaData } from "../models/pagination";
import { useAppSelector } from "../store/configureStore";

interface AddPaginationProps {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export const AddPagination = ({
  metaData,
  onPageChange,
}: AddPaginationProps) => {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        Displaying {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{" "}
        of {totalCount} items
      </Typography>
      <Pagination
        onChange={(e, page) => onPageChange(page)}
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
      />
    </Box>
  );
};
