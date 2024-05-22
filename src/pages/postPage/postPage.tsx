import { Container } from "@mui/material";
import Post from "../../Components/Post/Post";
import './postPage.css'

function PostPage() {
    return (
        <>
            <Container sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
            }}>
                <Post
                    img="https://img.freepik.com/free-photo/researchers-looking-alternative-energy-souces_23-2149311493.jpg"
                    description="Description"
                    actions={[
                        {
                            IconImage: <img src="https://img.icons8.com/color/48/000000/like--v1.png" alt="like" />,
                            onClickAction: () => console.log('like')
                        },
                        {
                            IconImage: <img src="https://img.icons8.com/color/48/000000/share--v1.png" alt="share" />,
                            onClickAction: () => console.log('share')
                        }
                    ]}
                />
            </Container>
        </>
    )
}

export default PostPage;