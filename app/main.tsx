import { View, Text, StyleSheet, Image,FlatList } from 'react-native'
import React from 'react'

const Main = () => {
    return (
        <View style={style.container}>
            <View style={style.mainCardContainer}>
                {[3, 1, 2].map(
                    (index, item) => {
                        return (<View key={index}>
                            <Image source={{}} style={style.mainCardImage} />
                            <Text style={style.mainCardTitle}>{item}</Text>
                            <View style={style.mainCardRankContainer}>
                                <Text style={style.mainCardRankContainerText}>{index}</Text>
                            </View>
                        </View>);
                    })}
            </View>
            <FlatList data={[1, 2, 3, 4, 5]}
             renderItem={
                ({ item, index }) => { 
                    return( 
                    <View style={style.card} key={index}>
                         <View style={style.cardDataContainer}>
                            <Text>{index}</Text><Image source={{}}/>
                            <Text style={style.cardTitle}></Text> 
                            </View>
                            <View style={style.cardRankContainer}></View> 
                            </View>
                            );
                            }
                            }/>
        </View>);
};

const style = StyleSheet.create({
    container: {},
    topContainer: {},
    headerTitle: {},
    mainCardContainer: {},
    mainCard: {},
    mainCardImage: {},
    mainCardTitle: {},
    mainCardRankContainer: {},
    mainCardRankContainerText: {},
    card: {},
    cardDataContainer: {},
    carIndex: {},
    cardImage: {},
    cardTitle: {},
    cardRankContainer: {},
    cardRackTitle: {}
});

export default Main;