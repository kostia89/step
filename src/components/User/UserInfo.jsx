import { UserPageFoto } from "./UserPageFoto";

import { Box } from "@mui/material";

import { UserInformationBlock } from "./UserInformationBlock";

export function UserInfo() {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <UserPageFoto />
      <Box
        sx={{
          padding: "11px 15px",
        }}
      >
        <UserInformationBlock w={"140"} h={"140"} mt={"-70"} />
      </Box>
    </Box>
  );
}
