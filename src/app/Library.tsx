import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class Library extends Component {
  render() {
    return (
      <View>
        <Text>Library</Text>
        <Link href={"/modal"}> mmodal</Link>
      </View>
    )
  }
}