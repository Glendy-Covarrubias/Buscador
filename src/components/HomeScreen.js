import React, { useState, useEffect } from "react";
import { Center } from "native-base";

import Search from "./Search";
import SearchTab from "./SearchTab";
import SearchView from "./SearchView";

function HomeScreen({ navigation, route }) {
    const [searchArray, setSearchArray] = useState([]);

    useEffect(() => {
        if (route.params?.serchResult) {
            setSearchArray(route.params.serchResult.data);
        }
      }, [route.params?.serchResult]);

    return (
        <>
            <Center>
                <SearchView navigation={navigation} />
            </Center>
            <SearchTab searchArray={searchArray} navigation={navigation} />
        </>
    );
}

export default HomeScreen;