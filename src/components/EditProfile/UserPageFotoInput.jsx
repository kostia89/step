import { Button } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sendUserHederFoto } from "src/redux/thunk/sendUserHederFoto";

export function UserPageFotoInput() {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (file) {
      let sendFoto = new FormData();
      sendFoto.append("file", file);

      dispatch(sendUserHederFoto(sendFoto));
    }
    if (file) {
      // setFilePath(URL.createObjectURL(file));
      // console.log(URL.createObjectURL(file));
    }
  }, [file]);
  return (
    <Button
      variant="conteined"
      component="label"
      sx={{
        borderRadius: "999px",
        background: "rgb(37 37 37 / 50%)",
        padding: "22px",
        "&:hover": {
          background: "rgb(37 37 37 / 30%)",
        },
      }}
    >
      <AddAPhotoOutlinedIcon sx={{ fontSize: "18px" }} />
      <input
        name="foto"
        type="file"
        hidden
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        accept="image/png, image/gif, image/jpeg"
      />
    </Button>
  );
}
