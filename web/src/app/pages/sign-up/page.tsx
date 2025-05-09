"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useHooks } from "./hooks";

const SignUpPage = () => {
  const { handleCreateAccount } = useHooks();
  return (
    <>
      <Stack sx={{ height: "100vh" }}>
        <Stack
          sx={{
            background: "pink",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            width: "45%",
            position: "absolute",
            right: 0,
            top: 0,
            flexdirection: "columnn",
          }}
        >
          <form onSubmit={handleCreateAccount}>
            <Typography variant="h2">SIGN UP HERE</Typography>
            <TextField
              type="text"
              sx={{ width: "80%", paddingBottom: "20px" }}
            ></TextField>
            <TextField
              type="text"
              sx={{ width: "80%", paddingBottom: "20px" }}
            ></TextField>
            <TextField
              type="password"
              sx={{ width: "80%", paddingBottom: "20px" }}
            ></TextField>
            <Button>Create Account</Button>
          </form>

          <Button href={"/"}>Login</Button>
        </Stack>
      </Stack>
    </>
  );
};
export default SignUpPage;
