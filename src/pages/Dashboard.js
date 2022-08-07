/** @format */

import React, { useEffect } from "react";
import {
  Flex,
  Heading,
  Link,
  Icon,
  Text,
  Box,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineTicket, HiOutlineHome } from "react-icons/hi";
import {
  BsClipboard,
  BsArchive,
  BsBuilding,
  BsBoundingBox,
} from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { FiLayers, FiTrello } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { FaSearchDollar } from "react-icons/fa";
import {SiNuxtdotjs} from "react-icons/si"
import CompProfile from "../components/CompProfile";
import BankAcc from "../components/BankAcc";
import Relation from "../components/Relation";
import Activity from "../components/Activity";
import Location from "../components/Location";
import Header from "../components/Header";
import { useMediaQuery } from "@chakra-ui/react";
import '../styles/global.css'

const Dashboard = () => {
  // const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* kolom 1 */}
      <Flex
        width="5%"
        flexDir="column"
        alignItems="center"
        backgroundColor="RGBA(0, 0, 0, 0.08)"
        color="#747474"
        boxShadow={"xl"}
      >
        <Flex flexDir="column" justifyContent="space-evenly" h="100%">
          <Flex flexDir="column" as="nav">
            <Heading fontSize="xl" alignSelf="center">
              <Icon
                  as={SiNuxtdotjs}
                  fontSize={{base:'xs', md:'lg', lg:'xl'}}
                  className="active-icon"
                />
            </Heading>
          </Flex>

          <Flex align="center" justifyContent="center" flexDir={"column"}>
            <Flex className="sidebar-items active">
              <Link>
                <Icon
                  as={HiOutlineHome}
                  fontSize="lg"
                  className="active-icon"
                />
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={HiOutlineTicket} fontSize="lg" />
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={BsClipboard} fontSize="lg" />
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={BsArchive} fontSize="lg" />
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={BsBuilding} fontSize="lg" />
              </Link>
            </Flex>
          </Flex>

          <Flex align="center" justifyContent="center" flexDir={"column"}>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={RiGroupLine} fontSize="lg"  />
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiLayers} fontSize="lg" />
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link >
                <Icon as={IoCubeOutline} fontSize="lg" />
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={BsBoundingBox} fontSize="lg" />
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FaSearchDollar} fontSize="lg" />
              </Link>
            </Flex>
          </Flex>

          <Flex align="center" justifyContent="center" flexDir={"column"}>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiTrello} fontSize="lg"  />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <VStack
        maxW={"100vw"}
        w={"100vw"}
        backgroundColor="#f8f9fa"
        overflowX={"hidden"}
        overflowY={"auto"}
        paddingTop={{ base: "50px", md: "50px",lg:'10px' }}
        paddingBottom={'100px'}
      >
        <Header />
        <Stack
          direction={{ base: "column", md: "column", lg: "row" }}
          width={{base:"90%", md: "90%", lg: "100%" }}
          height={"100%"}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "flex-start" }}
        >
          <Stack
            heigth={"100%"}
            minWidth={{ base: "100%", md: "100%", lg: "20%" }}
            boxShadow={'2xl'}
          >
            <CompProfile />
          </Stack>
          <Stack
            direction={{base:'column', md: "column", lg: "column" }}
            width={{ base: "100%", md: "100%", lg: "70%" }}
            heigth="100%"
          >
            <Location />
            <Stack
              direction={{ base: "column", md: "column", lg: "row" }}
              width="100%"
              height={"100%"}
            >
              <Stack
                direction={"column"}
                width={{ base: "100%", md: "100%", lg: "50%" }}
                height={"100%"}
              >
                <BankAcc />
                <Relation />
              </Stack>
              <Stack
                width={{ base: "100%", md: "100%", lg: "50%" }}
                height="100%"
                boxShadow={'2xl'}
              >
                <Activity />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Dashboard;
