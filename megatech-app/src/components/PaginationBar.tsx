import { Pagination } from "@mui/material"


type Props = {
  totalPages: number;
  currentPage: number;
  onPageSelect: (page: number) => void;
}


export function PaginationBar({ totalPages, currentPage, onPageSelect }: Props) {
  return (
    <Pagination 
      count={totalPages} 
      variant="outlined" shape="rounded"
      page={currentPage}
      onChange={ (event, page) => onPageSelect(page) }
    />
  )
}