import React from 'react';
import { NativeBaseProvider, Center } from "native-base";

import AppBar from './components/AppBar';
import Search from './components/Search';
import SearchTab from './components/SearchTab';

const App = () => {
    return (
        <NativeBaseProvider>
            <AppBar />
            <Center>
                <Search />
            </Center>
            <SearchTab />
        </NativeBaseProvider>
    );
}

export default App;