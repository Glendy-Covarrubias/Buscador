import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Center, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import SearchList from './SearchList';

const FirstRoute = () => (
    <>
        <SearchList />
    </>
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class SearchTab extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Todos' },
            { key: 'second', title: 'Imagenes' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});