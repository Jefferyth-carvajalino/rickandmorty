import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const Descripcion = ({ route }) => {
	const API_URL = `https://rickandmortyapi.com/api/character/${route.params.id}`;
	const [descripcion, setDescripcion] = useState([]);

	useEffect(() => {
		axios.get(`${API_URL}`)
			.then(({ data }) => {
				setDescripcion(data);
			})
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.content_container}>
				<Image style={styles.image} source={{ uri: descripcion.image }} />

				<ScrollView style={styles.content_description}>

					<Text style={styles.label_name}>Nombre:</Text>
					<Text style={styles.text_name}>{descripcion.name}</Text>

					<Text style={styles.label_name}>Especie:</Text>
					<Text style={styles.text_name}>{descripcion.species}</Text>

					<Text style={styles.label_name}>Género:</Text>
					<Text style={styles.text_name}>{descripcion.gender}</Text>

					<Text style={styles.label_name}>Estado:</Text>
					<Text style={styles.text_name}>{descripcion.status}</Text>

				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: "20px",
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	content_container: {
		width: "100%",
		backgroundColor: "rgb(60, 62, 68)",
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10
	},
	content_image: {
		width: "100%",
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		flex: 1,
		width: "100%",
		borderTopEndRadius: 10,
		borderTopLeftRadius: 10,
	},
	content_description: {
		width: "100%",
		padding: "20px",
		flex: 1,
	},
	label_name: {
		color: "#ffffff",
		fontSize: 14
	},
	text_name: {
		color: "#ffffff",
		fontSize: 20,
		marginBottom: "15px"
	}
});

export default Descripcion;