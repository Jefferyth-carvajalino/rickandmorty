import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import axios from "axios";

import Personaje from "../components/Personaje";

const Home = ({ navigation }) => {
	const API_URL = "https://rickandmortyapi.com/api/character";
	const [personajes, setPersonajes] = useState([]);

	useEffect(() => {
		axios.get(`${API_URL}`)
			.then(({ data }) => {
				setPersonajes(data.results);
			})
	}, [])

	return (
		<SafeAreaView>
			<ScrollView>
				{
					personajes.map(personaje => {
						return (
							<Personaje
								key={personaje.id}
								id={personaje.id}
								name={personaje.name}
								image={personaje.image}
								navigation={navigation}
							/>
						)
					})
				}
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home;