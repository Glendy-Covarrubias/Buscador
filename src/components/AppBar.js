import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar } from "native-base";

function AppBar() {
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" />

        <Box safeAreaTop bg="violet.600" />

        <HStack bg="violet.600" px={1} py={3} justifyContent="space-between" alignItems="center" w="100%">
            <HStack space={4} alignItems="center">
                <Text color="white" fontSize={20} fontWeight="bold">
                    EDsearch
                </Text>
            </HStack>
        </HStack>
    </>;
}

export default AppBar;