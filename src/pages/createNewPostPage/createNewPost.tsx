import { FormControl, FormControlLabel, Radio } from "@mui/material";
import { AddButton, NewPostDiv, RadioGroupForm, TextFieldForm } from "./styles";

function CreateNewPostPage() {
    return (
        <>
            <NewPostDiv>
                <TextFieldForm id="newName" label="הוספת שם" />
                <br/>
                <TextFieldForm id="newText" label="הוספת טקסט" />
                <br/>
                <TextFieldForm id="newImageUrl" label="הוספת תמונה" />
                <br/>
                <TextFieldForm id="newLocation" label="הוספת מיקום" />
                <br/>
                <FormControl>
                    <RadioGroupForm
                        defaultValue="giver"
                        name="postTypeRadio"
                    >
                        <FormControlLabel value="giver" control={<Radio />} label="קבלת סיוע" />
                        <FormControlLabel value="reciever" control={<Radio />} label="מתן סיוע" />
                    </RadioGroupForm>
                </FormControl>
            </NewPostDiv>

            <AddButton>
                הוספה
            </AddButton>
        </>
    )
}

export default CreateNewPostPage;
