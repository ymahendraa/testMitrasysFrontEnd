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
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>404 Not Found</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Back to <Link href='/auth' color={'blue.400'} style={{textDecoration:'none'}} fontWeight={"bold"}>auth</Link> :'(
            </Text>
          </Stack>
        </Stack>
      </Flex>
    );
  }