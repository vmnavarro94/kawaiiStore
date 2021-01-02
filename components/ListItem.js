import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

export default ({ name, onPress, image }) => {
	return(
		<TouchableOpacity onPress={onPress} style={styles.container}>	
			<Text style={styles.text}>		
				<Image style={styles.image} source={{uri: image}}/>
				{ name }
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		height: 60,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	text: {
		fontSize: 18,
	},
	image: {
		width: 50,
		height: 50,
		resizeMode: 'stretch'
	}
})

