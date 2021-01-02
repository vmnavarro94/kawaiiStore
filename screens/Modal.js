import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { useFetch } from '../hooks'

export default ({ navigation }) => {
	const id = navigation.getParam('_id')
	const { loading, data } = useFetch(`https://krs-sales-backend.vnavarro.vercel.app/api/products/${id}`)
	return(	
		<View style={styles.container}>
			{ loading ? <Text>Cargando...</Text> :
				<>	
					<Text>{data._id}</Text>
					<Text>{data.name}</Text>
					<Text>{data.desc}</Text>
					<Image style={styles.image} source={{uri: data.image}}/>
					<Button title='Volver' onPress={() => navigation.navigate('Products')} />
				</>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: 'stretch',
	}
})

