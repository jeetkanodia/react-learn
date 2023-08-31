import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack h={"full"} alignItems={"center"} direction={["column", "row"]}>
        <VStack w={'full'} alignItems={['center' , 'flex-start']}>
            <Text fontWeight={'bold'}>About Us</Text>
            <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center' , 'left']}>Best App for Trading and Statistic Useage </Text>
            
        </VStack>
        <VStack>
            <Text>Created by</Text>
            <a target="blank" href="https://github.com/jeetkanodia">
            <Avatar src={'https://avatars.githubusercontent.com/u/95421736?s=400&u=48bbc69b925eef172b2e29a125bbd37e6ded44e1&v=4'} boxSize={'28'} mt={['4' , '0']}/>
            </a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
