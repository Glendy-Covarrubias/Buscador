import React, { useEffect, useState } from "react";
import { Input, VStack, Spinner, Button, List, Text, Heading } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { Alert } from "react-native";

const Search = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchStorage, setSearchStorage] = useState([]);

    useEffect(()=>{
        init();
    }, [])

    async function init() {
        const searches = await AsyncStorage.getItem("@searches");
        if(searches !== null){
            const parse = JSON.parse(searches);
            setSearchStorage(parse);
        }
    }

    function searchText(text) {
        setSearch(text);
    }

    async function searchAppi(query) {
        const options = {
            method: 'GET',
            url: 'https://anime-db.p.rapidapi.com/anime',
            params: {
                page: '1',
                size: '10',
                search: query,
                sortOrder: 'asc'
            },
            headers: {
                'X-RapidAPI-Key': '8409f17cf6msh46cb15f89fc43b1p143332jsndfebd2ea294f',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };

        saveSearch(query);
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

    async function saveSearch(search){
        try {
            const searches = await AsyncStorage.getItem('@searches');
            if(searches === null) {
                const searchArray = [search];
                await AsyncStorage.setItem("@searches", JSON.stringify(searchArray));
            } else {
                const parsed = JSON.parse(searches);
                const searchArray = [...parsed, search];
                await AsyncStorage.setItem("@searches", JSON.stringify(searchArray));
            }
        } catch (error) {
            Alert.alert("ERROR", "No se pudo guardar la búsqeda");
        }
    }

    function quickSearch(searchText){
        setSearch(searchText);
        searchAppi(searchText);
    }

    return (
        <VStack space={8} w="100%">
            <VStack w="100%" space={2} padding={2}>
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
                            <Button size={"xs"} margin={2} onPress={() => searchAppi(search)}> Buscar </Button>
                    }
                />
                <Heading mx={4} size={"xs"}>Búsquedas anteriores</Heading>
                {
                    searchStorage.map((e,i) =>
                        e.trim() !== '' &&
                        <List.Item mx={2} key={i} onPress={() => quickSearch(e)}>
                            <Text>
                                {e}
                            </Text>
                        </List.Item>
                    )
                }
            </VStack>
        </VStack>
    )
        ;
};

export default Search;