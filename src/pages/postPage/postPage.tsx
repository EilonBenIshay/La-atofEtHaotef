import { Card, Container } from "@mui/material";
import PostCard from "../../Components/Post/Post";
import './postPage.css'
import { useEffect, useState } from "react";
import { Post } from "../../types/Post/Post";
import { postsApi } from "../../api/Posts";

function PostPage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const allPosts = await postsApi.getAllPosts();
            setPosts(allPosts);
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        };
    
        fetchPosts();
      }, []);

    return (
        <>
        <Card sx={{backgroundColor: '#DCC9B6', width: '100%', height: '100%'}}>
            <Container sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                {posts.map((post: Post) => (
                    <PostCard
                        key={post.description}
                        img={post.imageURL} 
                        description={post.description}
                        actions={[
                            {
                                IconImage: <img src="https://img.icons8.com/?size=40&id=87&format=png&color=000000" alt="like" />,
                                onClickAction: () => console.log('like')
                            },
                            {
                                IconImage: <img src="https://img.icons8.com/?size=40&id=d7iUgF8ZrDaO&format=png&color=000000" alt="share" />,
                                onClickAction: () => console.log('share')
                            }
                        ]}
                    />
                ))}
            </Container>
            </Card>
        </>
    )
}

export default PostPage;
