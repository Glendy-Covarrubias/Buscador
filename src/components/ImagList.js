import React from "react";
import { List, Box, ScrollView, Text, Image, VStack, Center } from "native-base";

const ImagList = ({ navigation, searchArray }) => {

    if (searchArray.length === 0) {
        return (
            <Text>
                No se encontraron resultados para la búsqueda
            </Text>
        )
    }

    return (
        <ScrollView>
            <VStack space={3}>
                {
                    searchArray.map((e, i) =>
                        <Center key={i}>
                            <Image
                                key={i}
                                source={{
                                    uri: e.image
                                }} alt={e.title} size="xl" />
                        </Center>
                    )
                }
            </VStack>
        </ScrollView>
    );
};

export default ImagList;