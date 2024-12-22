import React, { useState } from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch stroke="gray" />
        </InputLeftElement>

        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fontSize={"sm"}
          placeholder="Enter Keywords"
          width={"300px"}
          bg={"rgba(255 , 255, 255, 0.2)"}
          borderRadius={"200"}
          onKeyDown={(e) => handleNavigation(e)}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBox;
