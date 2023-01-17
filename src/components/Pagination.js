import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";

export default function PaginationApp() {
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      marginTop={"20px"}
      marginBottom={"20px"}
    >
      <Pagination count={5} variant="outlined" shape="rounded" />
    </Box>
  );
}
