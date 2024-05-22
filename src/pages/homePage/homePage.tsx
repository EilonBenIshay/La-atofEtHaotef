import GiverImage from '../../assets/giverImage.jpg';
import RecieverImage from '../../assets/recieverImage.jpg';
import Card from '@mui/material/Card';
import * as s from './styles'

function HomePage() {

    const handleClick = () => {
        alert("hiiiiiii")
    };

    return (
        <>
            <Card sx={{
                backgroundColor: '#ECF39E',
                height: '37vh',
                width: '44vw',
                position: 'absolute',
                right: 0,
                top: '44%',
                transform: 'translateY(-50%)',
                borderRadius: '150px 0 0 150px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <s.RightImage src={GiverImage} alt="Card Image" onClick={handleClick} />
                <s.RightRotatedText>למתן סיוע</s.RightRotatedText>
            </Card>

            <Card sx={{
                backgroundColor: '#ECF39E',
                height: '37vh',
                width: '44vw',
                position: 'absolute',
                left: 0,
                top: '60%',
                transform: 'translateY(-50%)',
                borderRadius: '0 150px 150px 0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <s.LeftImage src={RecieverImage} alt="Card Image" onClick={handleClick} />
                <s.LeftRotatedText>לקבלת סיוע</s.LeftRotatedText>
            </Card>
        </>
    )
}

export default HomePage;
