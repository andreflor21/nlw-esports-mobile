import { View, Text, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  useEffect(() => {
    fetch('http://172.17.0.1:3333/games')
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GameCard data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}
// Aula 4 1:30:02
