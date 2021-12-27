import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Pressable, Modal, Image } from 'react-native';

const {width,height} =  Dimensions.get('window')

export const Modaldescription = ({explanation,modalVisible,setModalVisible}) => {

    // const [modalVisible, setModalVisible] = useState(false)

//   console.log('explanation',explanation)

    return (
        
        
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView} >


                    <Text style={{textAlign:'justify', color:'black',fontSize:14,lineHeight:20}} >{explanation}</Text>
                        



                        <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Cerrar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
        </Modal>
         
      
    )
}


const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop:130
    //   backgroundColor:'white',
    //   width:width*0.8,
    //   height:height*0.8
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical:20,
        borderWidth:2,
        borderColor:'yellow',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        
      },

    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop:10
    },
   
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "black",
    },

    buttonClose1: {
      backgroundColor: "black",
    },
    
    button1: {
        borderWidth:1,
        borderColor:'yellow',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:30
      },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },

    image: {
      width:400,
      height:height *0.6,
      alignItems:'center',
      borderRadius:10,
      marginTop:10,
      alignSelf:'center'
      
    },
  });