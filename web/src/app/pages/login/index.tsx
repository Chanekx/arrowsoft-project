import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import { useHooks } from "./hooks";
import InputField from "@/components/InputField/inputfield";

const LoginPage = () => {
  const { control, login } = useHooks();
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
            <InputField
              control={control}
              type="text"
              name="username"
            ></InputField>
            <InputField
              control={control}
              type="password"
              name="password"
            ></InputField>
            <Button sx={{ border: "1px solid black" }}type="submit">Login</Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};
export default LoginPage;
