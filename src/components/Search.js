import React, { useState } from "react";
import { Input, VStack, Spinner } from "native-base";

const Search = ({ navigation }) => {
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
        <VStack space={8} w="100%">
            <VStack w="100%" space={2}>
                <Input
                    my={4}
                    px={4}
                    py={3}
                    value={search}
                    onChange={() => navigation.navigate('Busqueda')}
                    placeholder="Search People & Places"
                    width="100%"
                    borderRadius="4"
                    fontSize="14"
                    InputRightElement={isLoading && <Spinner size={"md"} marginRight={2} />}
                />
            </VStack>
        </VStack>
    )
        ;
};

export default Search;