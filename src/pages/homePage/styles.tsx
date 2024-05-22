import { styled } from "@mui/material";

export const LeftImage = styled('img')({
    position: 'absolute',
    left: '15%',
    top: '10%',
    width: '80%',
    height: '80%', 
    objectFit: 'cover', 
    borderRadius: '0 150px 150px 0', 
    cursor: 'pointer',
})

export const RightImage = styled('img')({
    position: 'absolute',
    right: '15%',
    top: '10%',
    width: '80%',
    height: '80%', 
    objectFit: 'cover', 
    borderRadius: '150px 0 0 150px', 
    cursor: 'pointer',
})

export const LeftRotatedText = styled('div')({
    color: '#a4ac86',
    transform: 'translate(-50%, -50%) rotate(270deg)',
    position: 'absolute',
    left: '6.5%',
    top: '50%',
    fontSize: 'xx-large',
})

export const RightRotatedText = styled('div')({
    color: '#a4ac86',
    transform: 'translate(-50%, -50%) rotate(90deg)',
    position: 'absolute',
    right: '-19%',
    top: '50%',
    fontSize: 'xx-large',
})
