import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'; 
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Background from '../Assets/svg/background.svg';
import Search from '../Assets/svg/Search.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import Construction from '../Assets/svg/construction.svg';
import Film from '../Assets/svg/film.svg';
import Pets from '../Assets/svg/Pets.svg';
import Group from '../Assets/svg/Group.svg';
import Health from '../Assets/svg/Health.svg';
import Event from '../Assets/svg/Event.svg';
import HealthCare from '../Assets/svg/Healthcare.svg';
import Home from '../Assets/svg/Home.svg';
import Sidevector from '../Assets/svg/Sidevector.svg';
import SideMainVector from '../Assets/svg/SideMainVector.svg';
import Bottomside from '../Assets/svg/Bottomside.svg';
import BottomMain from '../Assets/svg/BottomMain.svg';
import HomeIcon from '../Assets/svg/homeIcon.svg';
import Searchs from '../Assets/svg/searchs.svg';
import Play from '../Assets/svg/play.svg';
import Profile from '../Assets/svg/profile.svg';


const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#9766FF', '#F7F3FF']}
        style={styles.gradientContainer}
      >
        <View style={styles.contentmain}>
          <View style={styles.content}>
            <Feather name="menu" size={24} color="#fff" />
            <View>
              <View style={styles.circle}></View>
              <Ionicon name="infinite-sharp" size={24} color="#fff" />
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{
        backgroundColor: "#EDFFCE",
        height: "25%",
        width: "85%",
        top: "-10%",
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      }}>
        <View style={{
          marginTop: "10%",
          marginLeft: "10%"
        }}>
          <Text style={styles.centertextmain}>Welcome,</Text>
          <Text style={styles.centertext}>Find Your</Text>
          <Text style={styles.centertext}>Dream Sector!</Text>
        </View>
        <View style={{
          flexDirection: "row", backgroundColor: "#fff", width: "85%", alignSelf: "center", borderRadius: 12, alignItems: "center", justifyContent: "space-evenly", marginTop: "5%",
          marginLeft: "5%"
        }}>
          <Search />
          <TextInput style={{
            width: "80%", fontWeight: "400",
            fontSize: 12,
            color: "#959595",
            lineHeight: 14,
            fontFamily: 'SFPRODISPLAYREGULAR',
          }}
            placeholder='What are you looking for?'
          >
          </TextInput>
        </View>


        <View style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
          <Background />
        </View>

      </View>
      <View style={{
        backgroundColor: "#EDFFCE",
        height: "5%",
        top: "-10%",
        width: "20%",
      }}>

      </View>
      <View style={{
        backgroundColor: "#fff",
        height: "100%",
        top: "-15%",
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      }}>
        <ScrollView
          nestedScrollEnabled={true}
          style={{ flex: 1 }}
        >
          <View style={{
            flex: 1,
            marginBottom: 500

          }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%", marginTop: "10%", marginBottom: "5%" }}>
              <Text style={styles.Exploretext}>Explore Categories</Text>
              <Entypo name="dots-three-horizontal" size={24} color="#000" />
            </View>
            <View style={{ flexDirection: "row", marginLeft: "5%" }}>
              <LinearGradient
                colors={['#FFFFFF', '#CBE0FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.gradient, { borderColor: "#CBE0FF" }]}
              >
                <View style={styles.row}>
                  <Construction />
                  <Text style={styles.gradienttext}>Construction</Text>
                </View>
              </LinearGradient>
              <LinearGradient
                colors={['#FFFFFF', '#FFE9BE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.gradient, { borderColor: "#FFE9BE" }]}
              >
                <View style={styles.row}>
                  <Film />
                  <Text style={styles.gradienttext}>Entertainment</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={{ flexDirection: "row", marginTop: "5%", marginLeft: "5%" }}>
              <LinearGradient
                colors={['#FEF2F3', '#FFB0DD']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.gradient, { borderColor: "#FFB0DD" }]}
              >
                <View style={styles.row}>
                  <Pets />
                  <Text style={styles.gradienttext}>Pet Care</Text>
                </View>
              </LinearGradient>
              <LinearGradient
                colors={['#FFFFFF', '#C0FCF6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.gradient, { borderColor: "#C0FCF6" }]}
              >
                <View style={styles.row}>
                  <Group />
                  <Text style={styles.gradienttext}>Home Care</Text>
                </View>
              </LinearGradient>
              <LinearGradient
                colors={['#FFFFFF', '#FFC8AB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.gradient, { borderColor: "#FFC8AB" }]}
              >
                <View style={styles.row}>
                  <Event />
                  <Text style={styles.gradienttext}>Events</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={{ flexDirection: "row", marginTop: "5%", marginLeft: "5%" }}>
              <LinearGradient
                colors={['#FEF2F3', '#CFCFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.gradient, { borderColor: "#CFCFFF" }]}
              >
                <View style={styles.row}>
                  <Health />
                  <Text style={styles.gradienttext}>Healthcare</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%", marginTop: "10%", marginBottom: "5%" }}>
              <Text style={styles.Exploretext}>Popular Sectors</Text>
              <Entypo name="dots-three-horizontal" size={24} color="#000" />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
              <Home />
              <HealthCare />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "5%", marginTop: "10%", marginBottom: "5%" }}>
              <Text style={styles.Exploretext}>Recommended for you</Text>
              <Entypo name="dots-three-horizontal" size={24} color="#000" />
            </View>
            <View style={{ backgroundColor: "#F6F4FF", height: 115, width: "90%", alignSelf: "center", borderRadius: 15, marginBottom: 10 }}>
              <View style={{ top: "15%", left: "5%", flex: 1, flexDirection: "row" }}>
                <View style={{ backgroundColor: "#FFC5C5", height: 81, width: 84, borderRadius: 10 }}>
                </View>
                <View style={{ width: "55%" }}>
                  <Text style={styles.longtext}>
                    Now share the Construction Sectors with your anyone and can save it as bookmark
                  </Text>
                  <Text style={styles.shorttext}>
                    Updated | 06:30 AM
                  </Text>
                </View>

              </View>
              <View style={{
                backgroundColor: "#995BFF", width: "20%", justifyContent: "center", alignItems: "center",
                position: 'absolute',
                right: "3%",
                bottom: "5%",
                overflow: "hidden",
                padding: 5,
                borderRadius: 16
              }}>
                <Text style={{
                  fontWeight: "800",
                  fontSize: 10,
                  color: "#FFFFFF",
                  lineHeight: 18,
                  fontFamily: 'SFPRODISPLAYREGULAR',
                }}>Explore</Text>
              </View>

              <View style={{
                position: 'absolute',
                right: 0,
                top: 0,
                overflow: "hidden",
                borderTopRightRadius: 15
              }}>
                <Sidevector />
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
                <Bottomside />
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
            <View style={{ backgroundColor: "#F6F4FF", height: 115, width: "90%", alignSelf: "center", borderRadius: 15, marginBottom: 10 }}>
              <View style={{ top: "15%", left: "5%", flex: 1, flexDirection: "row" }}>
                <View style={{ backgroundColor: "#FFC5C5", height: 81, width: 84, borderRadius: 10 }}>
                </View>
                <View style={{ width: "55%" }}>
                  <Text style={styles.longtext}>
                    Now share the Construction Sectors with your anyone and can save it as bookmark
                  </Text>
                  <Text style={styles.shorttext}>
                    Updated | 06:30 AM
                  </Text>
                </View>

              </View>
              <View style={{
                backgroundColor: "#995BFF", width: "20%", justifyContent: "center", alignItems: "center",
                position: 'absolute',
                right: "3%",
                bottom: "5%",
                overflow: "hidden",
                padding: 5,
                borderRadius: 16
              }}>
                <Text style={{
                  fontWeight: "800",
                  fontSize: 10,
                  color: "#FFFFFF",
                  lineHeight: 18,
                  fontFamily: 'SFPRODISPLAYREGULAR',
                }}>Explore</Text>
              </View>

              <View style={{
                position: 'absolute',
                right: 0,
                top: 0,
                overflow: "hidden",
                borderTopRightRadius: 15
              }}>
                <Sidevector />
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
                <Bottomside />
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
          </View>
        </ScrollView>
      </View>
      <View style={{ backgroundColor: "#fff", position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "space-evenly", width: "100%", paddingVertical: 10 }}>
        <TouchableOpacity style={{ flexDirection: "row", paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "#EEE6FF", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate('MainScreen')}
        >
          <HomeIcon />
          <Text style={{
            marginLeft: 10, color: "#252762D9",
            fontWeight: "700",
            fontSize: 12,
          }}>Home</Text>
        </TouchableOpacity>
        <Searchs />
        <Play />
        <Profile />
      </View>
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
    height: '20%',
    width: '100%',
    borderBottomRightRadius: 50,
  },
  content: {
    flex: 1,
    marginVertical: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentmain: {
    flex: 1,
    marginVertical: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
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

  },
  shorttext: {
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 12,
    color: "#060047",
    lineHeight: 24,
    fontFamily: 'SFPRODISPLAYREGULAR',
    marginTop: 10
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default HomeScreen;
