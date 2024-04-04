import React, { useState } from "react";
import { Input, Box, VStack, Divider, Heading, Spinner } from "native-base";

const Search = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function searchText(text) {
        setSearch(text);
        setIsLoading(true);
        setInterval(() => {
            setIsLoading(false);
            //navigation.navigate('Busqueda');
        }, 500)

    }

    return (
        <VStack space={8} w="100%">
            <VStack w="100%" space={2}>
                <Input
                    my={4}
                    px={4}
                    py={3}
                    value={search}
                    onChange={() => navigation.navigate('Busqueda')}
                    /* onChange={(value) => searchText(value)} */
                    placeholder="Search People & Places"
                    width="100%"
                    borderRadius="4"
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