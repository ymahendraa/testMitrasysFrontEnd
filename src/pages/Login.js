import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../src/redux/action/auth/index";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Swal from "sweetalert2";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: yup
    .string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const onKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handlePostLogin = async (service, payload) => {
    await dispatch(handleLogin({ service, payload }))
      .then((value) => {
        toast({
          title: "Login Berhasil",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        // if (value["error"] == null) {
        //   // navigate("/dashboard");
        //   toast({
        //     title: "Login Berhasil",
        //     status: "success",
        //     duration: 3000,
        //     isClosable: true,
        //   });
        // }else{
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Email/Password salah",
        //   });
        // }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email/Password salah",
        });
      });
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      onSubmit={(values) => {
        handlePostLogin("login", values);
      }}
    >
      {(props) => {
        const {
          values,
          errors,
          setFieldValue,
          handleChange,
          dirty,
          touched,
          handleBlur,
          isValid,
        } = props;
        return (
          <Form onKeyDown={onKeyDown}>
            <Flex minH={"100vh"} align={"center"} justify={"center"}>
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Sign in</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    Ayo masuk✌️
                  </Text>
                </Stack>
                <Box rounded={"lg"} boxShadow={"lg"} p={8}>
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <p style={{ fontSize: 14, color: "red" }}>
                          {errors.email}
                        </p>
                      ) : null}
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <p style={{ fontSize: 14, color: "red" }}>
                          {errors.password}
                        </p>
                      ) : null}
                    </FormControl>

                    <Stack spacing={10}>
                      <Button
                        type="submit"
                        // isLoading={loading}
                        isDisabled={!(isValid && dirty)}
                        colorScheme="green"
                        height={{ base: "80px", md: "60px" }}
                        color={"white"}
                      >
                        Sign in
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
