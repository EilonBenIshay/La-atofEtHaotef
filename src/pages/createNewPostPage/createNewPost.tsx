import { AddButton, NewPostDiv, TextFieldForm } from "./styles";

function CreateNewPostPage() {
    return (
        <>
            <NewPostDiv>
                <TextFieldForm id="newName" label="הוספת שם" />
                <br />
                <TextFieldForm id="newText" label="הוספת טקסט" />
                <br />
                <TextFieldForm id="newImageUrl" label="הוספת תמונה" />
                <br />
                <TextFieldForm id="newLocation" label="הוספת מיקום" />
                <br />
                <AddButton>
                    הוספה
                </AddButton>
            </NewPostDiv>
        </>
    )
}

export default CreateNewPostPage;
