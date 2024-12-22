import {
  HStack,
  Box,
  Image,
  Text,
  useMediaQuery,
  SimpleGrid,
  Button,
  Spacer,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import SearchBox from "./SearchBox";
import { gener_id_map } from "../utils/genre";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack gap={5} px={{ md: "20", base: "5" }}>
      <Box flexShrink={0}>
        <Link to={"/"}>
          <Image w={{ md: "20", base: "14" }} src={logo} />
        </Link>
      </Box>

      {isMobile ? (
        <Box ml="auto">
          <Button onClick={() => onOpen()}>
            <AiOutlineMenu />
          </Button>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>
                <Text fontWeight={"bold"}>Menu</Text>
              </DrawerHeader>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack gap={2}>
                  <SearchBox />
                  <Text mt="10" mb="5" alignItems={"flex-start"}>
                    Search by genre
                  </Text>
                  <SimpleGrid
                    w="100%"
                    gridTemplateColumns={`repeat(auto-fill , minmax(100px , 1fr))`}
                    spacing="10px"
                  >
                    {Object.keys(gener_id_map).map((key) => {
                      return (
                        <Box>
                          <Text fontSize={"sm"} textAlign={"justify"}>
                            <Link to={`/genre/${gener_id_map[key]}`}>
                              {key}
                            </Link>
                          </Text>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ) : (
        <>
          <HStack color={"grey"} fontSize={"sm"} gap={2}>
            <Text _hover={{ cursor: "pointer", color: "white" }} px={3} py={1}>
              <Link to={"/"}>Home</Link>
            </Text>
            <Popover trigger="hover" placement="end-end">
              <PopoverTrigger>
                <Text
                  px={3}
                  py={1}
                  _hover={{ cursor: "pointer", color: "white" }}
                >
                  Genre
                </Text>
              </PopoverTrigger>
              <PopoverContent w={400}>
                <PopoverArrow />
                <PopoverBody p={5}>
                  <SimpleGrid
                    gridTemplateColumns={`repeat(auto-fill , minmax(100px , 1fr))`}
                    spacing="10px"
                  >
                    {Object.keys(gener_id_map).map((key) => {
                      return (
                        <Box>
                          <Text fontSize={"sm"} textAlign={"justify"}>
                            <Link to={`/genre/${gener_id_map[key]}`}>
                              {key}
                            </Link>
                          </Text>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
          <Box ml={"auto"}>
            <SearchBox />
          </Box>
        </>
      )}
    </HStack>
  );
};

export default Navbar;
