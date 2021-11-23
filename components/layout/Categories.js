import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useDataAPI } from "@/Context/CategoryContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import useWindowSize from "@/Hooks/UseWindowSize";

const Categories = ({ isOpen }) => {
  const { isTabletDisplay } = useWindowSize();
  const { categories } = useDataAPI();
  const [categorySelected, setCategorySelected] = useState(0);
  const categoryList = categories ? categories.children_data : [];
  const formattedCategoryList =
    categoryList.length !== 0 ? categoryList.slice(1, categoryList.length) : [];

  if (!categories || formattedCategoryList.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: "0" }}
          animate={{ height: isTabletDisplay ? "90vh" : "40vh" }}
          exit={{ height: "0" }}
          transition={{ type: "tween", duration: isTabletDisplay ? 0.05 : 0.2 }}
          style={{
            width: "100%",
            zIndex: "1",
            maxHeight: isTabletDisplay ? "90vh" : "40vh",
          }}
        >
          <Box
            display="flex"
            flexDir={isTabletDisplay ? "column" : "row"}
            height="100%"
            borderTopWidth="1px"
            marginTop="1rem"
          >
            <Box
              display="flex"
              flexDir={isTabletDisplay ? "row" : "column"}
              flexWrap="nowrap"
              overflowX={isTabletDisplay ? "auto" : "visible"}
              overflowY={isTabletDisplay ? "hidden" : "auto"}
              width={isTabletDisplay ? "100%" : "40vw"}
              maxWidth={isTabletDisplay ? "100%" : "280px"}
              alignItems={isTabletDisplay ? "center" : "flex-start"}
              p="1rem"
              gridGap="10px"
            >
              {formattedCategoryList.map((data, index) => (
                <Box key={data.id}>
                  <Button
                    width="fit-content"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    variant="ghost"
                    backgroundColor={
                      isTabletDisplay && index === categorySelected
                        ? "green.50"
                        : ""
                    }
                    colorScheme="green"
                    color={
                      isTabletDisplay && index === categorySelected
                        ? "green"
                        : "blackAlpha.700"
                    }
                    size="md"
                    fontSize="12px"
                    textTransform="capitalize"
                    padding="1rem"
                    wordBreak="break-word"
                    _hover={{
                      color: "green",
                      backgroundColor: "green.50",
                    }}
                    onClick={() => setCategorySelected(index)}
                  >
                    {data.name}
                  </Button>
                </Box>
              ))}
            </Box>
            <VStack
              height="100%"
              width="100%"
              overflowY="auto"
              justifyContent="flex-start"
              alignItems="flex-start"
              gridGap="1rem"
              padding="1rem"
            >
              <Heading as="h4" size="md">
                {formattedCategoryList[categorySelected].name}
              </Heading>
              {formattedCategoryList[categorySelected].children_data.length !==
              0 ? (
                <Box
                  width="100%"
                  display="grid"
                  gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                  flexWrap="wrap"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  gridGap="2rem"
                >
                  {formattedCategoryList[categorySelected].children_data.map(
                    (data, index) => (
                      <VStack width="100%" key={index} alignItems="flex-start">
                        <Text
                          fontSize={isTabletDisplay ? "14px" : "12px"}
                          fontWeight="semibold"
                        >
                          {data.name}
                        </Text>
                        <VStack alignItems="flex-start">
                          {data.children_data.length !== 0 ? (
                            data.children_data.map((item, idx) => (
                              <Link key={idx} href="/" passHref>
                                <Text
                                  cursor="pointer"
                                  fontSize={isTabletDisplay ? "14px" : "12px"}
                                  color="blackAlpha.800"
                                  _hover={{
                                    color: "green",
                                  }}
                                >
                                  {item.name}
                                </Text>
                              </Link>
                            ))
                          ) : (
                            <Text
                              cursor="pointer"
                              fontSize="12px"
                              color="blackAlpha.800"
                            >
                              -
                            </Text>
                          )}
                        </VStack>
                      </VStack>
                    )
                  )}
                </Box>
              ) : (
                <Text cursor="pointer" fontSize="12px" color="blackAlpha.800">
                  -
                </Text>
              )}
            </VStack>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Categories;
