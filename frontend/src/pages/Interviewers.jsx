import React, { useEffect, useState } from "react";
import { ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { CircleLoader } from "react-spinners";
import InterviewerBox from "../components/Interviewer/InterviewerBox";
import InterviewerHead from "../components/Interviewer/InterviewerHead"
import { Link } from "react-router-dom";

function Interviewers() {
  const [interviewers, setInterviewers] = useState([]);
  useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_server}interviewer/home`)
        .then((response) => {
          setInterviewers(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
  }, []);
  console.log(interviewers);
  return (
    <HStack
      display={"flex"}
      justifyContent={{ base: "center", md: "flex-start" }}
      backgroundColor={"#000"}
    >
      <Flex
        flexDirection={"column"}
        gap={"1rem"}
        p={{ base: "3", md: "8" }}
        color={"white"}
      >
        <InterviewerHead />
        <Box
          pb={{ base: "1", md: "4" }}
          display="flex"
          flexDirection="column"
          gap={10}
        >
          {interviewers.length === 0 ? (
            <Flex
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            alignItems="center"
            justifyContent="center"
          >
            <CircleLoader color="white" />
          </Flex>
          ) : (
            interviewers.map((e, i) => {
              return <InterviewerBox data={e} key={i} />;
            })
          )}
        </Box>
      </Flex>
    </HStack>
  );
}

export default Interviewers;
