import React from "react";
import Search from "./Search";
import { Center } from "native-base";

function SearchScreen({ navigation }) {
    return (
        <>
            <Center>
                <Search />
            </Center>
        </>
    );
}

export default SearchScreen;