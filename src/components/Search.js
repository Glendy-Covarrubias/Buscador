import React, { useState } from "react";
import { Input, Box, VStack, Divider, Heading, Spinner } from "native-base";

const Search = () => {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function searchText(text) {
        setSearch(text);
        setIsLoading(true);
        setInterval(() => {
            setIsLoading(false);
        }, 500)

    }

    return (
        <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2"><Divider /></Box>}>
            <VStack w="100%" space={5} alignSelf="center">
                <Heading fontSize="lg">Material</Heading>
                <Input
                    value={search}
                    onChange={(value) => searchText(value)}
                    placeholder="Search People & Places"
                    width="100%"
                    borderRadius="4"
                    py="3"
                    px="1"
                    fontSize="14"
                    /* InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} 
                    */
                    InputRightElement={isLoading && <Spinner size={"md"} marginRight={2} />}
                />
            </VStack>
        </VStack>
    )
        ;
};

export default Search;