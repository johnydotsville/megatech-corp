import { Pagination } from "@mui/material"


type Props = {
  size?: number;
  currentPage: number;
  onPageSelect: (page: number) => void;
}


export function PaginationBar({ size = 10, currentPage, onPageSelect }: Props) {
  return (
    <Pagination 
      count={size} 
      variant="outlined" shape="rounded"
      page={currentPage}
      onChange={ (event, page) => onPageSelect(page) }
    />
  )
}