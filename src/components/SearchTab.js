import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import SearchList from './SearchList';


function SearchTab({ navigation }) {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Todos' },
        { key: 'second', title: 'Imagenes' }
    ]);

    const FirstRoute = () => (
        <>
            <SearchList navigation={navigation} />
        </>
    );

    const SecondRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
    );

    return (
        <TabView
            navigationState={{
                index,
                routes
            }}
            renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
            })}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});

export default SearchTab;