import styled from 'styled-components';

interface BoardProps {
    row:number
}

export const Board=styled.div<BoardProps>`
    display: grid;
    grid-template-rows: ${({row})=>`repeat(${row},1fr)`};
    grid-template-columns: ${({row})=>`repeat(${row},1fr)`}
`