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
        <Card sx={{ marginTop: 5, height:400, width: 400, backgroundColor: '#4F772D' }}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="150"
                    width="200"
                    image={img}
                />
                <Card sx={{ backgroundColor: '#ECF39E', marginTop: '1rem', borderRadius: '1.25rem' }}>
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
                        backgroundColor: '#ECF39E',
                    }}>
                        {action.IconImage}
                    </IconButton>
                ))}
            </CardActions>
        </Card>
    );
};

export default Post;
