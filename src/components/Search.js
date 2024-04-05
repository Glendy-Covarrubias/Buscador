import React, { useState } from "react";
import { Input, VStack, Spinner, Button } from "native-base";
import axios from "axios";
import { Alert } from "react-native";

const Search = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function searchText(text) {
        setSearch(text);
    }

    async function searchAppi() {
        const options = {
            method: 'GET',
            url: 'https://anime-db.p.rapidapi.com/anime',
            params: {
                page: '1',
                size: '10',
                search: search,
                sortOrder: 'asc'
            },
            headers: {
                'X-RapidAPI-Key': '8409f17cf6msh46cb15f89fc43b1p143332jsndfebd2ea294f',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };

        setIsLoading(true);
        try {
            const res = await axios.request(options);
            setIsLoading(false);
            navigation.navigate('AppSearch', { serchResult: res.data });
        } catch (error) {
            setIsLoading(false);
            Alert.alert("Error", 'No se pudo realizar la búsqueda ahora. Intente mas tarde')
        }
    }

    return (
        <VStack space={8} w="100%">
            <VStack w="100%" space={2}>
                <Input
                    my={4}
                    px={4}
                    py={3}
                    value={search}
                    placeholder="Buscar..."
                    width="100%"
                    borderRadius="4"
                    fontSize="14"
                    /* onChange={() => navigation.navigate('Busqueda')} */
                    onChangeText={(t) => searchText(t)}
                    InputRightElement={
                        isLoading ?
                            <Spinner size={"md"} marginRight={2} />
                            :
                            <Button size={"xs"} onPress={() => searchAppi()}> Buscar </Button>
                    }
                />
            </VStack>
        </VStack>
    )
        ;
};

export default Search;