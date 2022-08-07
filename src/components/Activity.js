import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  Icon,
  Button,
  useDisclosure,
  Input,
  Select,
} from "@chakra-ui/react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { services } from "../../src/utilitys/service";
import { BiPencil } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";

import Swal from "sweetalert2";
import ModalUpdate from "./ModalUpdate";
import ModalAdd from "./ModalAdd";
import { useToast } from '@chakra-ui/react'
import useSearch from '../hooks/useSearch'

const Activity = () => {
  const token = useSelector(({ auth }) => auth.userToken.access_token);
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [search, setSearch] = useState('')
  const [statusSearch, setStatusSearch] = useState('')
  const {filteredData, onSearch} = useSearch(search, statusSearch, data, 'name', 'status')

  const toast = useToast()
  const {
    isOpen: isOpenAddModal,
    onOpen: onOpenAddModal,
    onClose: onCloseAddModal,
  } = useDisclosure();
  const {
    isOpen: isOpenUpdateModal,
    onOpen: onOpenUpdateModal,
    onClose: onCloseUpdateModal,
  } = useDisclosure();

  useEffect(() => {
      services["getCustomer"](token)
      .then((response) => {
        setData(response.data);
      })
      .catch(async (err) => {
        console.error(err);
      });
  }, [isFetching]);

  const DeleteModal = (val) => {
    return Swal.fire({
      title: "Apakah anda yakin?",
      text: `Hapus ${val.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus",
    }).then((result) => {
      if (result.isConfirmed) {
          handleDelete(val)
        } 
    });
  };

  const handleDelete = async (val) =>{
    val['id'] = await val.id
    services["deleteCustomer"](token,val)
    .then(async (response) => {
      // setData(response.data);
      await toast({
        title: 'Delete data.',
        description: response.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      const filter = data.filter((item) => item.id !== val.id)
      setData(filter)
      Swal.fire("Terhapus!", `${val.name} berhasil terhapus!`, "success")
    })
    .catch(async (err) => {
      console.error(err);
    });
  }

  const handleOpenUpdate = (data) => {
    setSelectedData(data);
    onOpenUpdateModal();
  };

  const handleOpenAdd = () => {
    onOpenAddModal();
  };

  const RenderTable = ({data}) => {
    return (
      data.map((item, idx) => (
        <Tr key={idx}>
        <Td>{item.name}</Td>
        <Td>{item.address}</Td>
        <Td>{item.country}</Td>
        <Td>{item.phone_number}</Td>
        <Td>{item.job_title}</Td>
        <Td alignSelf={"center"}>
          {item.status ? (
            <Badge colorScheme="green">Active</Badge>
            ) : (
              <Badge colorScheme="red">Inactive</Badge>
              )}
        </Td>
        <Td>
          <HStack
            alignItems={"start"}
            justifyContent={"start"}
            height={"100%"}
            padding={2}
            >
            <Button
              variant="link"
              onClick={() => handleOpenUpdate(item)}
              >
              <Icon
                as={BiPencil}
                fontSize="sm"
                color={"#7DCE13"}
                />
            </Button>
            <Button variant="link" onClick={() => DeleteModal(item)}>
              <Icon
                as={RiDeleteBinLine}
                fontSize="sm"
                color={"#D61C4E"}
                />
            </Button>
          </HStack>
        </Td>
      </Tr>
    ))
    )
  }
    
  return (
    <Box
      height={{ base: "75vh", md: "40vh", lg: "75vh" }}
      backgroundColor="#ffff"
      borderRadius={9}
      padding={"20px"}
    >
      <VStack w={"100%"} alignItems={"start"} height="100%">
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Text fontSize={{base:'md', md:'lg', xl:'xl'}} fontWeight="bold">
            Customer
          </Text>
          <Button
            variant="link"
            
            onClick={handleOpenAdd}
          >
            <Icon as={IoPersonAdd} fontSize="sm" _hover={{ color: "#94B49F" }}/>
          </Button>
        </HStack>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Input placeholder='Basic usage' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <Select placeholder='Select option' value={statusSearch} onChange={(e) => setStatusSearch(e.target.value)}>
            {/* <option value='#'>No Option</option> */}
            <option value='true'>Active</option>
            <option value='false'>Inactive</option>
          </Select>
        </HStack>
        <Box height="80%" overflowY={"auto"} width="100%">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Address</Th>
                  <Th>Country</Th>
                  <Th>Phone Number</Th>
                  <Th>Job title</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data !== null ? (
                  onSearch 
                  ? <RenderTable data={filteredData} /> 
                  : <RenderTable data={data} />
                ) : (
                  <Tr>
                    <Td colSpan={7}>No Data</Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
          <ModalUpdate
            onClose={onCloseUpdateModal}
            isOpen={isOpenUpdateModal}
            data={selectedData}
          />
          <ModalAdd
            onClose={onCloseAddModal}
            isOpen={isOpenAddModal}
            setIsFetching={setIsFetching}
          />
        </Box>
      </VStack>
    </Box>
  );
};
export default Activity;
