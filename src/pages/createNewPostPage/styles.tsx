import { Button, RadioGroup, TextField, styled } from "@mui/material";

export const NewPostDiv = styled('div')({
    backgroundColor: "#ECF39E",
    height: "85%",
    width: "100%",
    right: 0,
    top: "10%",
    position: "absolute",
    paddingTop: "2%",
})

export const TextFieldForm = styled(TextField)({
    margin: "1%",
    textAlign: "right",
})

export const RadioGroupForm = styled(RadioGroup)({
    flexDirection: "row",
    justifyContent: "center"
})

export const AddButton = styled(Button)({
    color: "#ECF39E",
    backgroundColor: "#90A955",
    borderRadius: '50px 50px 50px 50px', 
    position: "absolute",
    bottom: "10%",
})
