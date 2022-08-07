/** @format */

import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const AddAccountButton = () => {
  return (
    <Button
      backgroundColor={"green"}
      variant="solid"
      _hover={{ backgroundColor: "#94B49F" }}
      color={"#ffff"}
      leftIcon={<IoMdAdd />}
      size={"xs"}
    >
      Tambah Akun Bank
    </Button>
  );
};

const DetailBankAcc = () => {
  const data = [
    {
      primary: "#59CE8F",
      secondary: "#3120E0",
    },
    {
      primary: "#FF1E00",
      secondary: "#F0EABE",
    },
    {
      primary: "#21E1E1",
      secondary: "#FA2FB5",
    },
    {
      primary: "#3B9AE1",
      secondary: "#FFC23C",
    },
  ];

  // data[math.random(0,data.length-1)]['primary']
  // data[math.random(0,data.length-1)]['secondary']

  const random = Math.floor(Math.random() * data.length);

  return (
    <HStack width={"100%"} height={"100%"}>
      <HStack>
        <Box
          w="150px"
          h="100px"
          bgGradient={`linear(to-r, ${data[random]["primary"]}, ${data[random]["secondary"]})`}
          justifyContent={"end"}
          display={"flex"}
          alignItems={"end"}
          borderRadius={5}
          padding={2}
        >
          <Text fontWeight={"bold"} color="#ffff">
            Visa
          </Text>
        </Box>
        <Spacer />
        <VStack
          alignItems={"start"}
          justifyContent={"space-between"}
          spacing={"25px"}
        >
          <Text fontWeight={"bold"}>Nama Bank</Text>
          <Box display={"flex"} flexDir={"column"}>
            <Text>**** 5525 - Si Tampan</Text>
            <Text>USD</Text>
          </Box>
        </VStack>
      </HStack>
      <Spacer />
      <HStack
        alignItems={"start"}
        justifyContent={"start"}
        height={"100%"}
        padding={2}
      >
        <Link>
          <Icon as={BiPencil} fontSize="sm" color={"#7DCE13"} />
        </Link>
        <Link>
          <Icon as={RiDeleteBinLine} fontSize="sm" color={"#D61C4E"} />
        </Link>
      </HStack>
    </HStack>
  );
};

const BankAcc = () => {
  return (
    <Box
      height={{ base: "30vh", md: "30vh", lg: "40vh" }}
      backgroundColor="#ffff"
      borderRadius={9}
      padding={"20px"}
      width={"100%"}
      boxShadow={'2xl'}
    >
      <VStack w={"100%"} height={"100%"} spacing={3}>
        <HStack justifyContent={"space-between"} w={"100%"} height={"10%"}>
          <Text fontSize={{base:'md', md:'lg', xl:'xl'}} fontWeight="bold">
            Akun Bank
          </Text>
          <AddAccountButton />
        </HStack>
        <VStack
          width={"100%"}
          height="90%"
          overflowX={"hidden"}
          overflowY={"auto"}
          marginTop={"100px"}
        >
          <DetailBankAcc />
          <DetailBankAcc />
          <DetailBankAcc />
          <DetailBankAcc />
        </VStack>
      </VStack>
    </Box>
  );
};
export default BankAcc;
