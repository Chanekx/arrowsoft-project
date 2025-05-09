"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useHooks } from "./hooks";
import Link from "next/link";
// import InputField from "@/components/InputField/inputfield";


const LoginPage = () => {
  const { control, login } = useHooks();
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
              src="/loginbackground.jpg"
              objectFit="cover"
              layout="fill"
            />
          </Box>
        </Stack>
        <form style={{ height: "100%" }} onSubmit={login}>
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
            <TextField
              type="text"
              label="Username"
              {...control.register("username")}
              required
              defaultValue= "" 
           />
            <TextField
              type="password"
              label="Password"
              {...control.register("password")}
              sx={{ width: "80%", paddingBottom: "20px" }}
              required
            ></TextField>
            <Typography sx={{ paddingBottom: "10px" }}>
              <Link href={"/pages/reset-password"}> Forgot Password?</Link>
            </Typography>

            <Button
              sx={{ border: "1px solid black" }}
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
            <Typography>
              Dont have an account? <Link href={"/pages/sign-up"}>Sign Up</Link>
            </Typography>
          </Stack>
        </form>
      </Stack>
    </>
  );
};
export default LoginPage;
