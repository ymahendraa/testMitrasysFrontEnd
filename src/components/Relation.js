import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
  Icon
} from "@chakra-ui/react";

import { BiShareAlt } from "react-icons/bi";

const Relation = () => {
  const data = [
    {
      icon:BiShareAlt,
      value:20,
      name:'Memiliki'
    },
    {
      icon:BiShareAlt,
      value:108,
      name:'Menggunakan'
    },
    {
      icon:BiShareAlt,
      value:67,
      name:'Meminjam'
    }
  ]

  const ItemActivity = ({data}) => {
    return (
      <HStack width={'100%'} alignItems={'center'}>
        <Icon as={data.icon} color='black' fontSize={{base:"lg",md:'xl', lg:'2xl'}} me={'10px'}/>
        <VStack spacing={0} alignItems={'start'} marginBottom={'10px'}>
          <Text fontSize={{base:"lg",md:'xl', lg:'2xl'}} fontWeight={'bold'}>{data.value}</Text>
          <Text fontSize={{base:"sm",md:'md', lg:'lg'}} color={'gray'}>{data.name}</Text>
        </VStack>
      </HStack>
    )
  }

  return (
    <Box
    height={{ base: "15vh", md: "15vh", lg: "34vh" }}
      backgroundColor="#ffff"
      borderRadius={9}
      padding={'20px'}
      boxShadow={'2xl'}
    >
      <VStack w={"100%"} alignItems={'start'} height="100%">
          <HStack justifyContent={'space-between'} w={'100%'} height="25%">
          <Text fontSize={{base:'md', md:'lg', xl:'xl'}} fontWeight="bold">Relasi</Text>
            <Link style={{textDecoration:'none'}}>
              <Text color="#6DBD74" fontSize={'sm'} >
                Lihat semua
              </Text>
            </Link>
          </HStack>
          <Box height="90%" width="100%" display={'flex'} flexDir={{md:'row',lg:'column'}} overflowX={{md:'auto',lg:'hidden'}} overflowY={{md:'hidden',lg:'auto'}}>
            {
              data.map((item, idx) => (
                <ItemActivity data={item} key={idx} />
                ))
            }
          </Box>
      </VStack>
    </Box>
  );
};
export default Relation;
