import GiverImage from '../../assets/giverImage.jpg';
import RecieverImage from '../../assets/recieverImage.jpg';
import Card from '@mui/material/Card';
import * as s from './styles'
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

function HomePage() {
    return (
        <>
        <Link to={'/post'}>
            <Card sx={{
                backgroundColor: '#dcc9b6',
                height: '13rem',
                width: '33rem',
                position: 'absolute',
                right: 0,
                top: '44%',
                transform: 'translateY(-50%)',
                borderRadius: '150px 0 0 150px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            >
                <s.RightImage src={GiverImage} alt="Card Image"/>
                <s.RightRotatedText>למתן סיוע</s.RightRotatedText>
                
            </Card>
          </Link>

          <Link to={'/post'}>
            <Card sx={{
                backgroundColor: '#dcc9b6',
                height: '13rem',
                width: '33rem',
                position: 'absolute',
                left: 0,
                top: '60%',
                transform: 'translateY(-50%)',
                borderRadius: '0 150px 150px 0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <s.LeftImage src={RecieverImage} alt="Card Image"/>
                <s.LeftRotatedText>לקבלת סיוע</s.LeftRotatedText>
            </Card>
          </Link>
            <Divider variant="middle"
          sx={{
            width: '90vw',
            border: '2.4px solid',
            borderColor: '#ECF39E',
            position: 'absolute',
            bottom: '17vh',
          }} />
        <div className="contact">
          צרו קשר:
          <br />
          052-5381648
          <br />
          israel@gmail.com
        </div>
        </>
    )
}

export default HomePage;
