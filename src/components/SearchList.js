import React, { useState } from "react";
import { List, Box } from "native-base";

const SearchList = ({ navigation }) => {

    const [list, setList] = useState([
        'React Native',
        'React JS',
        'React 360'
    ]);

    return <Box w="100%">
        <List space={2} my={2}>
            {
                list.map((e, index) =>
                    <List.Item key={index} onPress={() => navigation.navigate('WebView')}>{e}</List.Item>
                )
            }
        </List>
    </Box>;
};

export default SearchList;