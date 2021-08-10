import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor='#063b91' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/bzu-logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Stay connected with BZU!</Text>
            <Text style={styles.text}>BZU Teachers Click on 'BZU Teacher' Button!</Text>
            <Text style={styles.text}>BZU Students Click on 'BZU Student' Button!</Text>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                  <LinearGradient
                      colors={['#063b91', '#063b91']}
                      style={styles.signIn}
                  >
                      <Text style={styles.textSign}>BZU Teacher</Text>
                      {/* <MaterialIcons 
                          name="navigate-next"
                          color="#fff"
                          size={20}
                      /> */}
                  </LinearGradient>
              </TouchableOpacity>
            </View>
            
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>navigation.navigate('StudentsScreens')}>
                  <LinearGradient
                      colors={['#063b91', '#063b91']}
                      style={styles.signIn}
                  >
                      <Text style={styles.textSign}>BZU Student</Text>
                      {/* <MaterialIcons 
                          name="navigate-next"
                          color="#fff"
                          size={20}
                      /> */}
                  </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <Text style={{textAlign: 'center'}}>Not a BZU Person?</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('StudentsScreens')}>
                  <LinearGradient
                      colors={['#063b91', '#063b91']}
                      style={styles.signIn}
                  >
                      <Text style={styles.textSign}>Guest User</Text>
                      {/* <MaterialIcons 
                          name="navigate-next"
                          color="#fff"
                          size={20}
                      /> */}
                  </LinearGradient>
              </TouchableOpacity>
            </View>

        </Animatable.View>
        </ScrollView>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 16}}>Developed by Adnan GM</Text>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#063b91'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      //borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: '20%',
      paddingHorizontal: 30,
      borderBottomLeftRadius: 30,
      //borderBottomRightRadius: 30,
  },
  logo: {
      width: height_logo,
      height: height_logo,
      marginBottom: '2%'
  },
  title: {
      color: '#05375a',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '-4%',
      marginBottom: '2%'
  },
  text: {
      color: 'grey',
      marginTop:5,
      
  },
  button: {
      //alignItems: 'center',
      marginTop: 30,
      //justifyContent: 'center',
     // alignSelf: 'center'
  },
  signIn: {
      width: '50%',
      padding: 15,
      alignSelf: 'center',
      borderRadius: 50,
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center'
  }
});















// const SplashScreen = ({navigation}) => {
//     const { colors } = useTheme();

//     const [animating, setAnimating] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//           setAnimating(false);
//           navigation.navigate('SignInScreen')
//         }, 3000);
//       }, []);

//     return (
//       <View style={styles.container}>
//         <ScrollView>
//           <StatusBar backgroundColor='#063b91' barStyle="light-content"/>
//         <View style={styles.header}>
//             <Animatable.Image 
//                 animation="bounceIn"
//                 duraton="1500"
//             source={require('../assets/bzu-logo.png')}
//             style={styles.logo}
//             resizeMode="stretch"
//             />
//         </View>
//         <Animatable.View style={styles.devView}>
//             <Text style={styles.devloper}>Developed By Adnan GM</Text>
//         </Animatable.View>
//         <Animatable.View 
//             style={[styles.footer, {
//                 backgroundColor: colors.background
//             }]}
//             animation="fadeInUpBig"
//         >
//             <Text style={[styles.title, {
//                 color: colors.text
//             }]}>Stay connected with everyone!</Text>
//             <Text style={styles.text}>Sign in with account</Text>
//             <View style={styles.button}>
//             <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
//                 <LinearGradient
//                     colors={['#08d4c4', '#01ab9d']}
//                     style={styles.signIn}
//                 >
//                     <Text style={styles.textSign}>I Am Teacher</Text>
//                     <MaterialIcons 
//                         name="navigate-next"
//                         color="#fff"
//                         size={20}
//                     />
//                 </LinearGradient>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
//                 <LinearGradient
//                     colors={['#08d4c4', '#01ab9d']}
//                     style={styles.signIn}
//                 >
//                     <Text style={styles.textSign}>I am Student</Text>
//                     <MaterialIcons 
//                         name="navigate-next"
//                         color="#fff"
//                         size={20}
//                     />
//                 </LinearGradient>
//             </TouchableOpacity>
//             </View>
//         </Animatable.View>
//         </ScrollView>
//       </View>
//     );
// };

// export default SplashScreen;

// const {height} = Dimensions.get("screen");
// const height_logo = height * 0.28;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     backgroundColor: '#063b91'
//   },
//   header: {
//     flex: 3,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   devView: {
//     flex: 1,
//     paddingTop: 250,
//   },
//   devloper: {
//     color: '#ffff',
//     fontWeight: 'bold',
//     fontSize: 20,
//     textAlign: 'center',
//   },
// //   footer: {
// //       flex: 1,
// //       backgroundColor: '#fff',
// //       borderTopLeftRadius: 30,
// //       borderTopRightRadius: 30,
// //       paddingVertical: 50,
// //       paddingHorizontal: 30
// //   },
//   logo: {
//       width: height_logo,
//       height: height_logo,
//       marginTop: '15%',
//       alignSelf: 'center',
//       justifyContent: 'center',
//   },
// //   title: {
// //       color: '#05375a',
// //       fontSize: 30,
// //       fontWeight: 'bold'
// //   },
//   text: {
//       color: 'grey',
//       marginTop:5
//   },
// //   button: {
// //       alignItems: 'flex-end',
// //       marginTop: 30
// //   },
// //   signIn: {
// //       width: 150,
// //       height: 40,
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       borderRadius: 50,
// //       flexDirection: 'row'
// //   },
// //   textSign: {
// //       color: 'white',
// //       fontWeight: 'bold'
// //   }
// });

