import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";

const Personaje = ({ id, name, image, navigation }) => {

	return (
		<TouchableHighlight onPress={() => { navigation.navigate('Descripcion', { id: id }) }}>
			<View style={styles.item}>
				<View style={styles.content_image}>
					<Image style={styles.image_desc} source={{ uri: image }} />
				</View>

				<View style={styles.content_desc}>
					<Text style={styles.name}>{name}</Text>
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	item: {
		height: 130,
		backgroundColor: "rgb(60, 62, 68)",
		borderRadius: 4,
		marginVertical: 10,
		marginHorizontal: 16,
		display: "flex",
		flexDirection: "row"
	},

	content_image: {
		width: 130,
		height: 130,
	},

	image_desc: {
		borderRadius: 4,
		borderTopEndRadius: 0,
		borderBottomEndRadius: 0,
		width: 130,
		height: 130,
	},

	content_desc: {
		padding: 10,
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start"
	},

	name: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#ffffff"
	},

	status: {
		fontSize: 16,
		color: "#ffffff"
	}
});

export default Personaje;
