import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Grid, TextField, Box, Button } from "@mui/material";
import { Item } from "../../../Utilities";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="centerVartical"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Item style={{ width: "382px", padding: "25px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Login Form</h1>
          </div>
          <TextField
            {...register("email")}
            placeholder="Email Id"
            id="outlined-basic"
            label="Email Id"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
            {errors.email?.message}
          </Box>
          <TextField
            {...register("password")}
            placeholder="Password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
            {errors.password?.message}
          </Box>
          <Button variant="contained" type="submit" sx={{ marginTop: "20px" }}>
            Submit
          </Button>
        </Item>
      </form>
    </Grid>
  );
};

export default LoginForm;
