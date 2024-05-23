import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { PostAction } from '../../types/Post/Post';

interface PostProps {
    img: string;
    description: string;
    actions: PostAction[];
}

const Post: React.FC<PostProps> = ({ img, description, actions }) => {
    return (
        <Card sx={{ marginTop: 5, width: 400, backgroundColor: '#656D4A' }}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="200"
                    width="220"
                    image={img}
                />
                <Card sx={{ backgroundColor: '#DCC9B6', marginTop: '1rem', borderRadius: '1.25rem' }}>
                    <CardContent>
                        <Typography>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', gap: 2 }}>
                {actions.map((action, index) => (
                    <IconButton key={index} onClick={action.onClickAction} sx={{
                        borderRadius: '50%',
                        padding: '10px',
                        backgroundColor: '#DCC9B6',
                        marginBottom: '1rem'
                    }}>
                        {action.IconImage}
                    </IconButton>
                ))}
            </CardActions>
        </Card>
    );
};

export default Post;
