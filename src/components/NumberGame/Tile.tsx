import { Button } from '@chakra-ui/react';

interface TileProps {
    id: number;
    progress: number;
    onClick: (id: number) => void;
}


export default function Tile({ id, progress, onClick}: TileProps) {


    return (<Button
    minWidth={12}
    // bg={id<=progress?'green.300':'gray.300'}
    colorScheme={id<=progress?'green':'gray'}
    onClick={()=>onClick(id)}
    _hover={{}}
    _active={{border:"2px gray solid"}}
    >{id}</Button>);
}
