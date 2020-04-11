import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Drawer } from 'react-native-paper'

import { MaterialCommunityIcons } from '@expo/vector-icons'

function CustomDrawer(props) {

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{uri: 'https://avatars3.githubusercontent.com/u/53307135?s=460&u=d14e55ce8663c3e64300f48ca357c0546c6a625f&v=4'}}
                                size={60}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>App title</Title>
                                <Caption style={styles.caption}>App caption</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection} title='Sections:' theme={{ colors: { text: 'ghostwhite' } }}>
                        <DrawerItem
                            activeTintColor='sandybrown'
                            inactiveTintColor='sandybrown'
                            icon={({color, size}) => (
                                <MaterialCommunityIcons name="home" color={color} size={size} />
                            )}
                            label='Test #1'
                            onPress={() => {  }}
                        />
                        <DrawerItem
                            activeTintColor='salmon'
                            inactiveTintColor='salmon'
                            icon={({color, size}) => (
                                <MaterialCommunityIcons name="home" color={color} size={size} />
                            )}
                            label='Test #2'
                            onPress={() => {  }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    activeTintColor='#e91e63'
                    inactiveTintColor='mintcream'
                    icon={({color, size}) => (
                        <MaterialCommunityIcons name="contact-mail" color={color} size={size} />
                    )}
                    label='Contact'
                    onPress={() => {  }}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 10
    },
    title: {
        color: 'mintcream',
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        color: 'mintcream',
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})

export { CustomDrawer }