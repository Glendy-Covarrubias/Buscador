import React, { useState } from "react";
import { Input, VStack, Spinner } from "native-base";
import { TouchableOpacity } from "react-native";

const SearchView = ({ navigation }) => {
    return (
        <VStack space={8} w="100%">
            <VStack w="100%" space={2}>
                <TouchableOpacity onPress={() => navigation.navigate('Busqueda')}>
                    <Input
                        my={4}
                        px={4}
                        py={3}
                        onTouchStart={() => navigation.navigate('Busqueda')}
                        editable={false}
                        /* onChange={() => navigation.navigate('Busqueda')} */
                        placeholder="Buscar..."
                        width="100%"
                        borderRadius="4"
                        fontSize="14"
                    />
                </TouchableOpacity>
                
            </VStack>
        </VStack>
    )
        ;
};

export default SearchView;