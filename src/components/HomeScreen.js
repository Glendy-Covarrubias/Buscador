import React from "react";
import { Center } from "native-base";

import Search from "./Search";
import SearchTab from "./SearchTab";

function HomeScreen({ navigation }) {
    return (
        <>
            <Center>
                <Search navigation={navigation}/>
            </Center>
            <SearchTab navigation={navigation}/>
        </>
    );
}

export default HomeScreen;