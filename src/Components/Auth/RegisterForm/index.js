import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Grid, TextField, Box, Button } from "@mui/material";
import { Item } from "../../../Utilities";
import FormControl from "@mui/material/FormControl";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().required(),
    mobileNo: yup.number().required(),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Your password is too short."),
    cPassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Your passwords do not match."),
  })
  .required();

const RegisterForm = () => {
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
        <Item style={{ width: "502px", padding: "25px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Register Form</h1>
          </div>
          <Box style={{ display: "flex" }}>
            <Box sx={{ width: "240px" }}>
              <FormControl fullWidth>
                <TextField
                  {...register("firstName")}
                  placeholder="First Name"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
                <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
                  {errors.firstName?.message}
                </Box>
              </FormControl>
            </Box>
            <Box sx={{ width: "240px", marginLeft: "20px" }}>
              <FormControl fullWidth>
                <TextField
                  {...register("lastName")}
                  placeholder="Last Name"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
                <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
                  {errors.lastName?.message}
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("email")}
                placeholder="Email Id"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                margin="normal"
                size="small"
              />
              <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
                {errors.email?.message}
              </Box>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("address")}
                placeholder="Address"
                id="outlined-basic"
                label="Address"
                variant="outlined"
                margin="normal"
                size="small"
              />
              <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
                {errors.address?.message}
              </Box>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("mobileNo")}
                placeholder="Mobile Number"
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                margin="normal"
                size="small"
              />
              <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
                {errors.mobileNo?.message}
              </Box>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("password")}
                placeholder="Password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                margin="normal"
                size="small"
              />
              <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
                {errors.password?.message}
              </Box>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                {...register("cPassword")}
                placeholder="Confirm Password"
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                size="small"
              />
              <Box sx={{ color: "error.main", textTransform: "capitalize" }}>
                {errors.cPassword?.message}
              </Box>
            </FormControl>
          </Box>
          <Button variant="contained" type="submit" sx={{ marginTop: "20px" }}>
            Submit
          </Button>
        </Item>
      </form>
    </Grid>
  );
};

export default RegisterForm;
