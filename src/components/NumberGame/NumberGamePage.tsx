import { Button, Container, Text, Box, HStack } from '@chakra-ui/react';
import GameContent from './NumberGameContent';
import { useState } from 'react';

const LEVEL = [
    { diff: "simple", number: 4, color: 'green' },
    { diff: "easy", number: 5, color: 'orange' },
    { diff: "challenging", number: 6, color: 'purple' },
    { diff: "hard", number: 8, color: 'red' },
]

const NumberGamePage = () => {
    const [boardSize, setboardSize] = useState(4)
    return (
        <Container centerContent bg='blue.300' maxW={'3xl'} py={6}>
            <Text fontSize={'3xl'}>Number Game</Text>
            <Text fontSize={'xl'}>Click numbers in ascending order, try to finish the game as fast as possible</Text>
            <Text fontSize={'md'}>Select difficulties</Text>
            <HStack>

                {LEVEL.map(({ diff, number, color }) => {
                    return <Button
                        key={diff}
                        colorScheme={color}
                        onClick={() => setboardSize(number)}
                        size='sm'
                        boxShadow={boardSize === number ? '4px 3px gray' : ""}
                    >
                        {diff.toUpperCase()}
                    </Button>
                })}
            </HStack>
            <GameContent boardSize={boardSize} />
        </Container>
    );
}

export default NumberGamePage;