import {
  Box,
  VStack,
  HStack,
  Avatar,
  Icon,
  Button,
  Text,
  Flex,
  Link,
  textDecoration,
  Stack
} from "@chakra-ui/react";
import { handleLogout } from "../redux/action/auth";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForLogout = async () => {
    await dispatch(handleLogout());
    await navigate("/");
  };
  return (
    <Box
      height={{ base: "5vh", md: "10vh", lg: "50vh" }}
      // backgroundColor="#ffff"
      // borderRadius={9}
      width={{base:"90vw", md:"90vw",lg:'90vw'}}
      mb={{base:"3em", md:"3em", lg:"2em"}}
      // mt={3}
      paddingX={2}
      display={"flex"}
      flexDir={{base:"column", md:"row", lg:"row"}}

    >
      <HStack
        width={{base:"100%", md:"50%",lg:"80%"}}
        justify={"start"}
      >
        <Flex color={"#000"} fontSize={{base:'sm', md:'md', lg:'xl'}} flexDir={{base:'column', md:'row', lg:'row'}}>
          <Text> Perusahaan {`>`} </Text>
          <Text fontWeight={"bold"}> Mitramas Infosys Global</Text>
        </Flex>
      </HStack>
      <Stack width={{base:"100%", md:'50%',lg:"18%"}} flexDirection={{base:'row-reverse', md:'column-reverse', lg:'column-reverse'}} align={{md:'end',lg:'end'}} height={'100%'}>
        <HStack width={"50%"} justify={{base:"center"}} mt={{md:'0.5em',lg:'1em'}} justifyContent={{md:"end"}}>
          <Button variant="link">
            <Icon
              as={IoSearchOutline}
              fontSize={{base:"md",md:"lg", md:"lg"}}
              color={"grey"}
              _hover={{ color: "black" }}
            />
          </Button>
          <Button variant="link">
            <Icon
              as={IoNotificationsOutline}
              fontSize={{base:"md",md:"lg", md:"lg"}}
              color={"grey"}
              _hover={{ color: "black" }}
            />
          </Button>
          <Button variant="link">
            <Icon
              as={BiLogOut}
              fontSize={{base:"md",md:"lg", md:"lg"}}
              color={"grey"}
              _hover={{ color: "black" }}
              onClick={() => handleForLogout()}
            />
          </Button>
          
        </HStack>
        <HStack width={"50%"} height={'100%'} justifyContent={{md:"end"}}>
          <Box>
            <Avatar
            size="sm"
            name="Profile"
            src="https://bit.ly/kent-c-dodds"
          />
          </Box>
          
          
          <Text noOfLines={1}>John Doe</Text>
        </HStack>
      </Stack>
      

      {/* <VStack w={"100%"}>
        <HStack justifyContent={"space-between"} w={"100%"} paddingX={"10px"}>
          <h1>Aktifitas</h1>
        </HStack>
        <HStack></HStack>
      </VStack> */}
    </Box>
  );
};
export default Header;
