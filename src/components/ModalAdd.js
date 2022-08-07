import React, { useEffect, useState, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Select,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { services } from "../utilitys/service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import * as yup from "yup";
import { useToast } from '@chakra-ui/react'

const ModalAdd = ({ isOpen, onClose, setIsFetching }) => {
  const toast = useToast()
  const token = useSelector(({ auth }) => auth.userToken.access_token);

  const navigate = useNavigate();

  const onKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  const initialValues = {
    name: '',
    address: '',
    country: '',
    phone_number: '',
    job_title: '',
    status: true,
  };

  const addSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Minimal 3 karakter")
      .max(50, "Maximal 50 karakter")
      .required("Nama wajib diisi"),
    address: yup
      .string()
      .required("Alamat wajib diisi"),
    phone_number: yup
      .string()
      .required("Phone wajib diisi"),
    country: yup
      .string()
      .min(3, "Minimal 3 karakte")
      .max(100, "Maximal 50 karakter")
      .required("Kewarganegaraan wajib diisi"),
    job_title: yup
      .string()
      .min(3, "Minimal 3 karakter")
      .max(50, "Maximal 50 karakter")
      .required("Profesi wajib diisi"),
    status: yup
      .boolean()
      .required("Status harus dipilih.")
  });

  const handleAddData = async (val) => {
    console.log(val);
    // val['id'] = await data.id
    // // console.log(val)
    services["addCustomer"](token,val)
    .then(async (response) => {
      // setData(response.data);
      await toast({
        title: 'Insert data.',
        description: response.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      await setIsFetching(true)
      await setIsFetching(false)
      await onClose()
      // console.log('ok 👌')
    })
    .catch(async (err) => {
      console.error(err);
    });
  };

  // console.log(data)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Customer</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={addSchema}
            onSubmit={(values) => {
              handleAddData(values);
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
              console.log(errors)
              return (
                <Form onKeyDown={onKeyDown}>
                  <FormControl>
                    <FormLabel>Nama</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {(errors.name && touched.name) && (
                      <p style={{ fontSize: 14, color: "red" }}>
                        {errors.name}
                      </p>
                    ) }
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Alamat</FormLabel>
                    <Input
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {(errors.address && touched.address) && (
                      <p style={{ fontSize: 14, color: "red" }}>
                        {errors.address}
                      </p>
                    ) }
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Kewarganegaraan</FormLabel>
                    <Input
                      type="text"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {(errors.country && touched.country) && (
                      <p style={{ fontSize: 14, color: "red" }}>
                        {errors.country}
                      </p>
                    ) }
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>No. Telepon</FormLabel>
                    <Input
                      type="text"
                      name="phone_number"
                      value={values.phone_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {(errors.phone_number && touched.phone_number) && (
                      <p style={{ fontSize: 14, color: "red" }}>
                        {errors.phone_number}
                      </p>
                    )}
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Profesi</FormLabel>
                    <Input
                      type="text"
                      name="job_title"
                      value={values.job_title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {(errors.job_title && touched.job_title) && (
                      <p style={{ fontSize: 14, color: "red" }}>{errors.job_title}</p>
                    ) }
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Status</FormLabel>
                    <Select
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </Select>
                  </FormControl>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      type={"submit"}
                      isDisabled={!(isValid && dirty)}
                      height={{ base: "80px", md: "60px" }}
                      color={"white"}
                    >
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                  
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalAdd;
