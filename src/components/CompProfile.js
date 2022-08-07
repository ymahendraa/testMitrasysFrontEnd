/** @format */

import {
  Flex,
  Avatar,
  Image,
  VStack,
  Text,
  Icon,
  HStack,
  Box,
  Link,
  Switch,
  Stack,
} from "@chakra-ui/react";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
// import "../styles/global.css";

const CompProfile = () => {
  const ItemProfile = ({
    label,
    value,
    isIcon,
    iconName,
    iconColor,
    labelColor,
    valueColor,
    isUrl,
    isSwitch,
  }) => {
    return (
      <Box
        spacing={"1px"}
        alignItems={"start"}
        fontSize={"sm"}
        justifyContent={"center"}
        width={"100%"}
        height={"100%"}
      >
        <Text px={5} color={labelColor} fontSize={"xs"}>
          {label}
        </Text>
        {isIcon ? (
          <HStack px={5} width={"100%"}>
            <Icon as={iconName} fontSize="sm" color={iconColor} />
            {isUrl ? (
              <Link>
                <Text
                  color={valueColor}
                  textDecoration={"underline"}
                  _hover={{ color: "grey" }}
                >
                  {value}
                </Text>
              </Link>
            ) : (
              <Text color={valueColor}>{value}</Text>
            )}
          </HStack>
        ) : (
          <HStack px={5} justifyContent={"space-between"} width={"100%"}>
            <Text color={valueColor}>{value}</Text>
            {isSwitch && <Switch size="sm" colorScheme="teal" />}
          </HStack>
        )}
      </Box>
    );
  };

  return (
    <Flex
      flexDir={{ base: "row", md: "row", lg: "column" }}
      height={"100%"}
      width={"100%"}
      position="relative"
      backgroundColor={"#ffff"}
      borderTopRadius={{base:9,md:9,lg:9}}
      borderBottomRadius={{base:9,md:9,lg:9}}

    >
      <VStack
        alignItems={"center"}
        mb={{ lg: "100px" }}
        width={{ base: "50%", md: "50%", lg: "100%" }}
        height={{ base: "100%", md: "100%", lg: "50%" }}
      borderBottomRadius={{base:9,md:9,lg:9}}
        marginBottom={{lg:'5.2em'}}
      >
        <Box width={"100%"} height={"100%"} > 
          <Image
            src="https://images.ctfassets.net/hrltx12pl8hq/5GaLeZJlLyOiQC4gOA0qUM/a0398c237e9744ade8b072f99349e07a/shutterstock_152461202_thumb.jpg?fit=fill&w=368&h=207"
            alt="cover img"
            backgroundSize={"contain"}
            borderBottomLeftRadius={{base:9, md:9, lg:0}}
            borderTopLeftRadius={{base:9, md:9, lg:9}}
            borderTopRightRadius={{lg:9}}

            height={{ base: "100%", md: "100%", lg: "5vw" }}
            width={{ base: "100%", md: "100%", lg: "100%" }}
          />
        </Box>

        <Box
          position={"absolute"}
          top={{base:"2%",md:"8%",lg:"4%"}}
          alignItems={"center"}
          // left={{md:"8.5%"}}
          marginBottom={"5%"}
          border={"2px"}
          borderColor={"rgb(70, 133, 70)"}
          rounded="full"
        >
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C510BAQGoqPOqFFYp0g/company-logo_200_200/0/1583912202955?e=2147483647&v=beta&t=GOBz8mAEorHJIcDqXVU1hYaBBu7HacN9ENSECo3TBWE"
            size={{base:'sm',md:'xl',lg:"xl"}}
          />
        </Box>
      </VStack>
      <Stack
        alignItems={"flex-start"}
        flexDir={"column"}
        width="100%"
        // marginTop={"5vh"}
      >
        <VStack alignSelf={"center"} width="100%" mb={2} paddingTop={{base:"2em",md:"2em"}}>
          <Text fontWeight={"bold"}>Mitramas Infosys Global</Text>
          <Text fontSize={"xs"}>Layanan IT</Text>
          <Link color="rgb(70, 133, 70)" style={{ textDecoration: "none" }}>
            <HStack spacing={"1px"}>
              <Icon as={FiEdit3} fontSize="sm" />
              <Text fontSize={"xs"} fontWeight="bold">
                Sunting Profile
              </Text>
            </HStack>
          </Link>
        </VStack>

        <Stack
          direction={{ sm: "row", md: "row", lg: "column" }}
          width={"100%"}
          m="10px"
          paddingBottom={{base:"2em", md:"2em", lg:"2em"}}
          paddingTop={{base:"1em", md: "1em"}}
        >
          <Stack>
            <ItemProfile
              label={"Status Perusahaan"}
              value={"Aktif"}
              isIcon={false}
              labelColor={"RGBA(0, 0, 0, 0.92)"}
              valueColor={"#000"}
              isSwitch
            />
            <ItemProfile
              label={"Singkatan"}
              value={"MIG"}
              isIcon={false}
              labelColor={"RGBA(0, 0, 0, 0.92)"}
              valueColor={"#000"}
            />

            <ItemProfile
              label={"Alamat Perusahaan"}
              value={"Jl. Tebet Raya No.42, Jakarta Selatan"}
              isIcon={false}
              labelColor={"RGBA(0, 0, 0, 0.92)"}
              valueColor={"#000"}
            />
            <ItemProfile
              label={"Penanggung Jawab (PIC)"}
              value={"John Doe"}
              isIcon={false}
              labelColor={"RGBA(0, 0, 0, 0.92)"}
              valueColor={"#000"}
            />
          </Stack>
          <Stack>
            <ItemProfile
              label={"Tanggal PKP"}
              value={"03 Maret 2021"}
              isIcon={false}
              labelColor={"RGBA(0, 0, 0, 0.92)"}
              valueColor={"#000"}
            />

            <ItemProfile
              label={"Email"}
              value={"mig@mitrasolusi.group"}
              isIcon
              labelColor={"RGBA(0, 0, 0, 0.92)"}
              valueColor={"rgb(70, 133, 70)"}
              iconName={IoMailOutline}
              iconColor={"rgb(70, 133, 70)"}
              isUrl
            />
            <ItemProfile
              label={"No.Telp"}
              value={"021-5678-1234"}
              isIcon
              labelColor={"RGBA(0, 0, 0, 0.92)"}
              valueColor={"rgb(70, 133, 70)"}
              iconName={IoCallOutline}
              iconColor={"rgb(70, 133, 70)"}
            />
            <ItemProfile
              label={"Situs Web"}
              value={"mitramas.com"}
              isIcon
              labelColor={"RGBA(0, 0, 0, 0.92)"}
              valueColor={"rgb(70, 133, 70)"}
              iconName={IoMailOutline}
              iconColor={"rgb(70, 133, 70)"}
              isUrl
            />
          </Stack>
        </Stack>

        {/* <ItemProfile>
          <Text>No.Telp</Text>
          <Text>08213232</Text>
        </ItemProfile>
        <ItemProfile>
          <Text>Situs Web</Text>
          <Text>mitramas.com</Text>
        </ItemProfile> */}
      </Stack>
    </Flex>
  );
};

export default CompProfile;
