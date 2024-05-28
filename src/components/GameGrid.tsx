import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
// import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{ sm: 2, md: 3, lg: 3, xl: 4 }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            // <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton} />
            // </GameCardContainer>
          ))}
        {data.map((game) => (
          // <GameCardContainer key={game.id}>
          <GameCard key={game.id} game={game} />
          // </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
