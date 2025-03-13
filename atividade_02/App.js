import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Air Jordan 1 (1985) - “Banned”',
    image: 'https://www.theshitbot.com/wp-content/uploads/2024/10/image-177-photoroom-2-1-min.png',
    text: ["• Data de Lançamento: 1985",  "• Ocasião: Criado especialmente para Michael Jordan, o modelo 1 foi famoso por ser “banido” pela NBA por violar o código de uniformes da liga (por não ter branco suficiente). A Nike aproveitou essa polêmica como marketing, dizendo que Jordan pagava uma multa cada vez que usava o tênis."],
  },
  {
    id: '2',
    title: 'Air Jordan 3 (1988) - “Elephant Print”',
    image: 'https://oblioclothing.com/cdn/shop/files/oblio_Air_Jordan_3_Retro_Fire_Red-Photoroom_3.png?v=1730980698&width=1000',
    text: ["• Data de Lançamento: 1988",  "Ocasião: O primeiro modelo desenhado por Tinker Hatfield. Marcou a introdução do logotipo Jumpman (silueta de Michael Jordan enterrando a bola) e o uso do icônico ''Elephant Print''. Também foi o modelo que Jordan usou durante sua lendária performance no concurso de enterradas de 1988."],
  },
  {
    id: '3',
    title: 'Air Jordan 4 (1989) - “Do The Right Thing”',
    image: 'https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-4-do-the-right-thing-748680.png?v=1638813165',
    text: ["•Data de Lançamento: 1989",  "Ocasião: Popularizado pelo filme Do The Right Thing de Spike Lee, que ajudou a consolidar a marca na cultura pop. Foi o primeiro tênis da linha Air Jordan a ser lançado globalmente."],
  },
  {
    id: '4',
    title: 'Air Jordan 6 (1991) - Primeiro Título da NBA',
    image: 'https://ir.ebaystatic.com/pictures/aw/pics/sneakers/58_c0a628686c.png',
    text: ["• Data de Lançamento: 1991", "• Ocasião: Michael Jordan usou este modelo durante sua primeira vitória no campeonato da NBA com o Chicago Bulls."],
  },
  {
    id: '5',
    title: 'Air Jordan 12 (1996) - “Flu Game”',
    image: 'https://jordansdaily.com/wp-content/uploads/2016/06/air-jordan-12-flu-game-3.png',
    text: ["• Data de Lançamento: 1996 ","• Ocasião: Ficou famoso por ser o tênis que Michael Jordan usou durante o lendário jogo da final de 1997 contra o Utah Jazz, conhecido como o “Flu Game”, onde Jordan marcou 38 pontos apesar de estar doente."],
  },
];

const Item = ({ title, image, text }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    {image && <Image source={{ uri: image }} style={styles.image} />}
    {text && text.map((line, index) => <Text key={index} style={styles.text}>{line}</Text>)}
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>JORDAN BRAND.</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/0/01/Jumpman_logo.png' }}
        style={styles.logoImage}
      />

      <Text style={styles.headerText}>A Jordan Brand é uma divisão da Nike, Inc. que se concentra em produtos inspirados e associados a Michael Jordan, um dos maiores jogadores de basquete de todos os tempos. A origem da Jordan Brand remonta a 1984, quando a Nike assinou um contrato de patrocínio com Michael Jordan, que na época era um jovem talento recém-saído da Universidade da Carolina do Norte e recém-draftado pelo Chicago Bulls, se tornando uma das parcerias mais históricas e promissoras feitas pela Nike.{"\n"}
        Alguns dos modelos mais icônicos do idolo da NBA:
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} image={item.image} text={item.text} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 2,
  },
  headerTitle: {
    color: 'black',
    fontSize: 25,
    margin: 10,
    textAlign: 'center'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 19

  },
  item: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 13,
    alignItems: 'flex-start', // Corrigido aqui
    width: "95%",
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    marginBottom: 1,
    color: 'white'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  logoImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  text: {
    fontSize: 18,
    marginTop: 5,
    color: 'white',
    textAlign: 'left',
  },
});

export default App;
