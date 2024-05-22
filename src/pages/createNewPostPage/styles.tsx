import { Button, RadioGroup, TextField, styled } from "@mui/material";

export const NewPostDiv = styled('div')({
    backgroundColor: "#ECF39E",
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

export const RadioGroupForm = styled(RadioGroup)({
    flexDirection: "row",
})

export const AddButton = styled(Button)({
    color: "#ECF39E",
    backgroundColor: "#90A955",
    borderRadius: '50px 50px 50px 50px', 
    position: "absolute",
    bottom: "8.5%",
    width: "17.5%",
    left: "40%"
})
