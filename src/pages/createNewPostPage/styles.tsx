import { Button, TextField, styled } from "@mui/material";

export const NewPostDiv = styled('div')({
    backgroundColor: "#dcc9b6",
    height: "83%",
    width: "100%",
    right: 0,
    top: "8.5%",
    position: "absolute",
    paddingTop: "3.5%",
    justifyContent: "center",
})

export const TextFieldForm = styled(TextField)({
    margin: "0.8%",
    width: "25%",
})

export const AddButton = styled(Button)({
    color: "#dcc9b6",
    backgroundColor: "#656D4A",
    borderRadius: '50px 50px 50px 50px', 
    position: "absolute",
    bottom: "8.5%",
    width: "17.5%",
    left: "40%"
})
