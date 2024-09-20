
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'; // Corrected import
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Background from '../Assets/svg/background.svg';
import Search from '../Assets/svg/Searched.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import Construction from '../Assets/svg/construction.svg';
import Film from '../Assets/svg/film.svg';
import Pets from '../Assets/svg/Pets.svg';
import Group from '../Assets/svg/Group.svg';
import Health from '../Assets/svg/Health.svg';
import Event from '../Assets/svg/Event.svg';
import HealthCare from '../Assets/svg/Healthcare.svg';
import Home from '../Assets/svg/Home.svg';
import SideMainVector from '../Assets/svg/SideTop.svg';
import BottomMain from '../Assets/svg/SideBottom.svg';
import HomeIcons from '../Assets/svg/HomeIcons.svg';
import Searchs from '../Assets/svg/searchs.svg';
import Play from '../Assets/svg/play.svg';
import Profile from '../Assets/svg/profile.svg';
import Paw from '../Assets/svg/Paw.svg';
import Paws from '../Assets/svg/Paws.svg';
import Dogone from '../Assets/svg/Dogone.svg';
import Dogtwo from '../Assets/svg/Dogtwo.svg';
import Dogthree from '../Assets/svg/Dogthree.svg';
import Icon from '../Assets/svg/Icon.svg';
import Slider from '../Assets/svg/Slider.svg';
import One from '../Assets/svg/One.svg';
import Two from '../Assets/svg/Two.svg';
import Three from '../Assets/svg/Three.svg';
import Four from '../Assets/svg/Four.svg';
import Five from '../Assets/svg/Five.svg';
import Profilephoto from '../Assets/svg/Profilephoto.svg';
import Bone from '../Assets/svg/Bone.svg';
import Pic from '../Assets/svg/Pic.svg';
import BackgroundSvg from '../Assets/svg/BackgroundSvg.svg';
import Pics from '../Assets/svg/Pics.svg';

const MainScreen = ({ navigation }: any) => {
    return (
        <View style={styles.screen}>

            <LinearGradient
                colors={['#FFB5B1', '#CD7ED9']}
                style={styles.gradientContainer}
            >
                <View style={styles.contentmain}>
                    <View style={styles.content}>
                        <Feather name="menu" size={24} color="#000" />
                        <Ionicon name="infinite-sharp" size={24} color="#fff" />
                        <View style={{ backgroundColor: "#FFFFFF33", height: 40, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 9, bottom: 10 }}>
                            <Feather name="bell" size={24} color="#000" />
                        </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: "5%", marginRight: "1%" }}>
                        <Text style={{
                            fontWeight: "700",
                            fontSize: 20,
                            color: "#000000",
                            lineHeight: 23,
                            fontFamily: 'SFPRODISPLAYREGULAR',
                        }}>
                            Hello,
                        </Text>
                        <Paw />
                    </View>
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: 16,
                            color: "#000000",
                            lineHeight: 19,
                            fontFamily: 'SFPRODISPLAYREGULAR',
                            marginLeft: "5%"
                        }}
                    >Fancy for a wash today!</Text>
                    <View style={{
                        marginLeft: "8%",
                        marginTop: "4%"
                    }}>
                        <Paws />
                    </View>


                </View>
            </LinearGradient>
            <View style={{
                backgroundColor: "#fff",
                height: "100%",
                top: "-55%",
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
            }}>
                <View style={{
                    position: "absolute",
                    flexDirection: "row",
                    alignItems: "center",
                    right: "5%",
                    top: "-10%"
                }}>
                    <Dogone />
                    <Dogtwo />
                    <Dogthree />
                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    style={{ flex: 1 }}
                >
                    <View style={{
                        flex: 1,
                        marginBottom: 500

                    }}>
                        <View style={{
                            flexDirection: "row", backgroundColor: "#FFEDF2", width: "90%", alignSelf: "center", borderRadius: 12, alignItems: "center", justifyContent: "space-evenly", marginTop: "5%",
                        }}>
                            <Search />
                            <TextInput style={{
                                width: "80%", fontWeight: "400",
                                fontSize: 12,
                                color: "#FF6694",
                                lineHeight: 14,
                                fontFamily: 'SFPRODISPLAYREGULAR',
                            }}
                                placeholder='What are you looking for?'
                                placeholderTextColor={"#FF6694"}
                            >
                            </TextInput>
                            <Icon />
                        </View>
                        <View style={{ alignSelf: "center", marginVertical: "5%" }}>
                            <Slider />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%", marginTop: "10%", marginBottom: "5%" }}>
                            <Text style={styles.Exploretext}>Popular Services</Text>
                            <Entypo name="dots-three-horizontal" size={24} color="#000" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: "2%", alignItems: "center" }}>
                            <One />
                            <Two />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: "2%", alignItems: "center" }}>
                            <Three />
                            <Four />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginBottom: "2%", marginLeft: "5%", alignItems: "center" }}>
                            <Five />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%", marginTop: "10%", marginBottom: "5%" }}>
                            <Text style={styles.Exploretext}>Service Providers</Text>
                            <Entypo name="dots-three-horizontal" size={24} color="#000" />
                        </View>

                        <View style={{ backgroundColor: "#FFE7EA",height: 100, width: "90%", alignSelf: "center", borderRadius: 15, marginBottom: 10 }}>
                            <View style={{ top: "10%", left: "5%", flex: 1, flexDirection: "row" }}>
                                <View style={{ top: "10%" }}>
                                    <Profilephoto />
                                </View>

                                <View style={{ width: "75%" }}>
                                    <Text style={styles.longtext}>
                                        Rohit Singhania
                                    </Text>
                                    <Text style={styles.shorttext}>
                                        Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                                    </Text>
                                    <View style={{
                                        backgroundColor: "#CF76DD", width: "30%", justifyContent: "center", alignItems: "center",
                                        padding: 5,
                                        borderRadius: 4,
                                        marginLeft: "5%"
                                    }}>
                                        <Text style={{
                                            fontWeight: "800",
                                            fontSize: 10,
                                            color: "#FFFFFF",
                                            lineHeight: 18,
                                            fontFamily: 'SFPRODISPLAYREGULAR',
                                        }}>Know More</Text>
                                    </View>
                                </View>


                            </View>

                            <View style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                overflow: "hidden",
                                borderTopRightRadius: 15
                            }}>
                                <SideMainVector />
                            </View>
                            <View style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                overflow: "hidden",
                                borderBottomLeftRadius: 15
                            }}>
                                <BottomMain />
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#FFE7EA",height: 100, width: "90%", alignSelf: "center", borderRadius: 15, marginBottom: 10 }}>
                            <View style={{ top: "10%", left: "5%", flex: 1, flexDirection: "row" }}>
                                <View style={{ top: "10%" }}>
                                    <Profilephoto />
                                </View>

                                <View style={{ width: "75%" }}>
                                    <Text style={styles.longtext}>
                                        Rohit Singhania
                                    </Text>
                                    <Text style={styles.shorttext}>
                                        Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                                    </Text>
                                    <View style={{
                                        backgroundColor: "#CF76DD", width: "30%", justifyContent: "center", alignItems: "center",
                                        padding: 5,
                                        borderRadius: 4,
                                        marginLeft: "5%"
                                    }}>
                                        <Text style={{
                                            fontWeight: "800",
                                            fontSize: 10,
                                            color: "#FFFFFF",
                                            lineHeight: 18,
                                            fontFamily: 'SFPRODISPLAYREGULAR',
                                        }}>Know More</Text>
                                    </View>
                                </View>


                            </View>

                            <View style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                overflow: "hidden",
                                borderTopRightRadius: 15
                            }}>
                                <SideMainVector />
                            </View>
                            <View style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                overflow: "hidden",
                                borderBottomLeftRadius: 15
                            }}>
                                <BottomMain />
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#FFE7EA",height: 100, width: "90%", alignSelf: "center", borderRadius: 15, marginBottom: 10 }}>
                            <View style={{ top: "10%", left: "5%", flex: 1, flexDirection: "row" }}>
                                <View style={{ top: "10%" }}>
                                    <Profilephoto />
                                </View>

                                <View style={{ width: "75%" }}>
                                    <Text style={styles.longtext}>
                                        Rohit Singhania
                                    </Text>
                                    <Text style={styles.shorttext}>
                                        Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                                    </Text>
                                    <View style={{
                                        backgroundColor: "#CF76DD", width: "30%", justifyContent: "center", alignItems: "center",
                                        padding: 5,
                                        borderRadius: 4,
                                        marginLeft: "5%"
                                    }}>
                                        <Text style={{
                                            fontWeight: "800",
                                            fontSize: 10,
                                            color: "#FFFFFF",
                                            lineHeight: 18,
                                            fontFamily: 'SFPRODISPLAYREGULAR',
                                        }}>Know More</Text>
                                    </View>
                                </View>


                            </View>

                            <View style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                overflow: "hidden",
                                borderTopRightRadius: 15
                            }}>
                                <SideMainVector />
                            </View>
                            <View style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                overflow: "hidden",
                                borderBottomLeftRadius: 15
                            }}>
                                <BottomMain />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%", marginTop: "10%", marginBottom: "5%" }}>
                            <Text style={styles.Exploretext}>Ratings</Text>
                            <Entypo name="dots-three-horizontal" size={24} color="#000" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%", marginTop: "3%", marginBottom: "5%" }}>
                            <Text style={styles.Reviewtext}>13 Reviews</Text>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.Reviewtext}>13 Reviews</Text>
                                <Feather name="edit" size={24} color="#FF6694" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", flex: 1, alignSelf: "center",marginBottom:10 }}>
                            <View style={{ height: 100, backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-between", width: "80%", alignItems: "center", alignSelf: "center", borderWidth: 1, borderColor: "#FFCCD2", borderRadius: 15 }}>
                            <View style={{
                                    position: "absolute",
                                    borderTopLeftRadius: 15,
                                    borderBottomLeftRadius: 15,
                                    left: 0,
                                    overflow: "hidden",
                                }}>
                                    <BackgroundSvg />
                                </View>
                                <View style={{ marginLeft: "5%", marginTop: "3%" }}>
                                    <Text style={{
                                        fontWeight: "700",
                                        fontSize: 14,
                                        color: "#000000",
                                        lineHeight: 16,
                                        fontFamily: 'SFPRODISPLAYREGULAR',

                                    }}>
                                        Pooja Jain
                                    </Text>

                                    <Bone />


                                    <Text
                                        style={{
                                            fontWeight: "400",
                                            fontSize: 12,
                                            color: "#000000",
                                            lineHeight: 14,
                                            fontFamily: 'SFPRODISPLAYREGULAR',

                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                                    </Text>
                                </View>
                                <View style={{

                                    borderTopRightRadius: 15,
                                    borderBottomRightRadius: 15,
                                    right: 0,
                                    overflow: "hidden",
                                }}>
                                    <Pic />
                                </View>
                         
                            </View>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", flex: 1, alignSelf: "center",marginBottom:10 }}>
                            <View style={{ height: 100, backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-between", width: "80%", alignItems: "center", alignSelf: "center", borderWidth: 1, borderColor: "#FFCCD2", borderRadius: 15 }}>
                            <View style={{
                                    position: "absolute",
                                    borderTopLeftRadius: 15,
                                    borderBottomLeftRadius: 15,
                                    left: 0,
                                    overflow: "hidden",
                                }}>
                                    <BackgroundSvg />
                                </View>
                                <View style={{ marginLeft: "5%", marginTop: "3%" }}>
                                    <Text style={{
                                        fontWeight: "700",
                                        fontSize: 14,
                                        color: "#000000",
                                        lineHeight: 16,
                                        fontFamily: 'SFPRODISPLAYREGULAR',

                                    }}>
                                        Pooja Jain
                                    </Text>

                                    <Bone />


                                    <Text
                                        style={{
                                            fontWeight: "400",
                                            fontSize: 12,
                                            color: "#000000",
                                            lineHeight: 14,
                                            fontFamily: 'SFPRODISPLAYREGULAR',

                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                                    </Text>
                                </View>
                                <View style={{

                                    borderTopRightRadius: 15,
                                    borderBottomRightRadius: 15,
                                    right: 0,
                                    overflow: "hidden",
                                }}>
                                    <Pics />
                                </View>
                         
                            </View>
                        </View>
                        

                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity style={{ backgroundColor: "#fff", position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "space-evenly", width: "100%", paddingVertical: 10 }}
             onPress={() => navigation.navigate('HomeScreen')}
            >
                <View style={{ flexDirection: "row", paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "#FFE7EA", borderRadius: 25, justifyContent: "center", alignItems: "center" }}>
                    <HomeIcons />
                    <Text style={{
                        marginLeft: 10, color: "#252762D9",
                        fontWeight: "700",
                        fontSize: 12,
                    }}>Home</Text>
                </View>
                <Searchs />
                <Play />
                <Profile />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    gradient: {
        borderRadius: 20,
        borderWidth: 0.5,
        padding: 10,
        marginRight: "2%",
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
        paddingHorizontal: 5
    },
    centertextmain: {
        fontWeight: "400",
        fontSize: 14,
        color: "#000000",
        lineHeight: 16,
        fontFamily: 'SFPRODISPLAYREGULAR',
    },
    centertext: {
        fontWeight: "600",
        fontSize: 24,
        color: "#000000",
        lineHeight: 28,
        fontFamily: 'SFPRODISPLAYREGULAR',
    },
    Exploretext: {
        fontWeight: "700",
        fontSize: 14,
        color: "#000000",
        lineHeight: 16,
        fontFamily: 'Inter',
    },
    Reviewtext: {
        fontWeight: "600",
        fontSize: 12,
        color: "#FF6694",
        lineHeight: 16,
        fontFamily: 'SFPRODISPLAYREGULAR',
        marginRight: 10
    },
    circle: {
        height: 10,
        width: 10,
        backgroundColor: "#FF8A00",
        borderRadius: 25,
        position: 'absolute',
        right: -5,
        top: -5,
    },
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
    },
    gradientContainer: {
        height: '80%',
        width: '100%',
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "5%",
    },
    contentmain: {
        marginTop: "5%"
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    gradienttext: {
        marginLeft: 10,
        fontWeight: "500",
        fontSize: 12,
        color: "#000000",
        lineHeight: 14,
        fontFamily: 'SFPRODISPLAYREGULAR',
    },
    longtext: {
        marginLeft: 10,
        fontWeight: "800",
        fontSize: 13,
        color: "#060047",
        lineHeight: 18,
        fontFamily: 'SFPRODISPLAYREGULAR',
        marginBottom:5

    },
    shorttext: {
        marginLeft: 10,
        fontWeight: "600",
        fontSize: 12,
        color: "#060047",
        lineHeight: 14,
        fontFamily: 'SFPRODISPLAYREGULAR',
        marginBottom:5
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },
});

export default MainScreen;
