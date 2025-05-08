import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
import { useHooks } from "./hooks";

const LoginPage = () => {
  const {control, login} = useHooks();
  return (
    <>
      <Stack height="100vh" width="100%" sx={{ background: "#9DBE8A" }}>
        <Stack
          sx={{
            border: "1px solid red",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            width: "auto%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
            <Image
              alt="Catnip Logo"
              src="/meow.svg"
              objectFit="cover"
              layout="fill"
            />
          </Box>
        </Stack>
        <form style={{height:'100%'}} onSubmit={login}>
          <Stack
            sx={{
              background: "pink",
              border: "1px solid red",
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
              width: "45%",
              position: "absolute",
              right: 0,
              top: 0,
            }}
          >
           
              <TextField type="email" value={control} label ="Filled"></TextField>
              <TextField type="password" value={control}></TextField>
              <Button sx={{border:'1px solid black'}}>Login</Button>
            
          </Stack>
        </form>
      </Stack>
    </>
  );
};
export default LoginPage;
