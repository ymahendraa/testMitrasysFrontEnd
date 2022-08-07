  import React, {Fragment} from 'react'

  import {
    Box,
    VStack,
    Icon,
    HStack,
    Stack,
    Text,
    Link,
  } from "@chakra-ui/react";
  import {
    BiBuildingHouse,
    BiWrench,
  } from "react-icons/bi";
  import {TbBuildingWarehouse} from "react-icons/tb"

  const Location = () =>{
    const data = [
      {
        name:'Induk',
        value:20,
        img: <Icon as={BiBuildingHouse} color='white' fontSize="4xl" />
      },
      {
        name:'Sub Lokasi level 1',
        value:3,
        img: <Icon as={BiWrench} color='white' fontSize="4xl" />
      },
      {
        name:'Sub Lokasi level 2',
        value:1,
        img: <Icon as={TbBuildingWarehouse} color='white' fontSize="4xl" />
      }
    ]

    const CardItem = ({data}) => {
      return (
        <Box 
          backgroundColor={'#6DBD74'}
          minWidth={{base:"15em",md:'13em',lg:"15em"}}
          maxWidth={{base:"5em",md:'13em',lg:"25em"}}
          height={{base:"5em",md:'5em',lg:'100%'}}
          borderRadius={4}
          _hover={{ backgroundColor: "#42934A", cursor: "pointer" }}
          
        >
          <HStack justifyContent={'space-between'} alignItems="center" w="100%" paddingX={'20px'}>
            {data.img}
            <VStack alignItems={'end'} justifyContent="center">
              <Text color={'white'} fontSize='2xl' fontWeight={'bold'}>{data.value}</Text>
              <Text color={'white'} fontSize={{base:'md', md:'sm', xl:'xl'}}>{data.name}</Text>
            </VStack>
          </HStack>
        </Box>
      )
    }

    return(
      <Box height={'100%'} backgroundColor="#ffff" borderRadius={9} boxShadow={'2xl'}>
        <VStack w={'100%'} height="100%" padding={'10px'} justifyContent="center" alignItems={'center'}>
          <HStack justifyContent={'space-between'} alignItems="center" w={'100%'} height="10%">
              <Text fontSize={{base:'md', md:'lg', xl:'xl'}} fontWeight="bold">Lokasi</Text>
              <Link>
                <Text color="#6DBD74" fontSize={{base:'sm', md:'sm', xl:'lg'}}>
                  Lihat semua
                </Text>
              </Link>
          </HStack>
          <Stack w="100%" direction={{base:'column',md:'row',lg:'row'}} justifyContent={'space-between'} alignItems="center">
            {data.map((item, idx) => (
                <CardItem data={item} key={idx}/>
            ))}
          </Stack>
        </VStack>
      </Box>
    )
  }
  export default Location;