"use client";
import { Button, Stack, Typography, CircularProgress, Alert } from "@mui/material";
import { useHooks } from "./hooks";
import InputField from "@/components/InputField/inputfield";

const SignUpPage = () => {
  const { createAccount, control, isLoading, error } = useHooks();
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
            flexDirection: "column",
          }}
        >
          <form onSubmit={createAccount}>
            <Stack spacing={2} sx={{ width: "300px" }}>
              <Typography variant="h2" align="center">SIGN UP HERE</Typography>
              
              {error && (
                <Alert severity="error" sx={{ width: '100%' }}>
                  {error}
                </Alert>
              )}

              <InputField type="text" control={control} name="username" label="Username" />
              <InputField type="text" control={control} name="firstname" label="firstname"></InputField>
              <InputField type="text" control={control} name="lastname" label="lastname"></InputField>
              <InputField type="password" control={control} name="password" label="Password" />
              <InputField type="password" control={control} name="password2" label="Confirm Password" />
              
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth 
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Create Account'}
              </Button>
            </Stack>
          </form>

          <Button href={"/"} sx={{ mt: 2 }}>Login</Button>
        </Stack>
      </Stack>
    </>
  );
};
export default SignUpPage;
