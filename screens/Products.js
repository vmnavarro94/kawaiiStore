import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { ListItem } from '../components'
import { useFetch } from '../hooks'

const Products = ({ navigation }) => {
  const { loading, data: products } = useFetch('https://krs-sales-backend.vnavarro.vercel.app/api/products/')
  return(
    <View>
      {
        loading 
          ?
            <Text>Cargando...</Text>
          :
            <FlatList 
              style={styles.list}
              data={products}
              keyExtractor={product => product._id}
              renderItem={ ({item}) =>
                <ListItem
                  onPress={() => navigation.navigate('Modal', {_id: item._id})}
                  name={item.name}
                  image={item.image}
                />}
            />

      }
    </View>
  )
}

Products.navigationOptions = () => ({
  title: 'Productos disponibles'
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	list: {
		alignSelf: 'stretch',
	},
})

export default Products

