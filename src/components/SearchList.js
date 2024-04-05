import React from "react";
import { List, Box, ScrollView, Text } from "native-base";

const SearchList = ({ navigation, searchArray }) => {

    if(searchArray.length === 0){
        return (
            <Text>
                No se encontraron resultados para la búsqueda
            </Text>
        )
    }

    return (
        <ScrollView>
            <Box w="100%">
                <List space={2} my={2}>
                    {
                        searchArray.map((e, i) =>
                            <List.Item key={i} onPress={() => navigation.navigate('WebView', { url: e.link})}>
                                <Text>
                                    {e.title}
                                </Text>
                            </List.Item>
                        )
                    }
                </List>
            </Box>
        </ScrollView>
    );
};

export default SearchList;