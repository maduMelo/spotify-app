import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';

export default function PlaylistCard({ playlist, index }) {
    return (
        <Card key={index}
            sx={{ 
                maxWidth: 345, backgroundColor: 'transparent', boxShadow: 'none',
                height: '90%', borderRadius: '10px', transition: '0.3s', padding: 2,
                '&:hover': { bgcolor: "rgba(255, 231, 231, 0.06)"}
            }}
        >
            <CardActionArea onClick={() => console.log(playlist)}>
                <CardMedia
                    component="img"
                    height="220"
                    sx={{ borderRadius: '8px', objectFit: 'fill' }}
                    image={playlist.images ? playlist.images[0].url : 'https://cdn-icons-png.freepik.com/512/7919/7919609.png'}
                    alt={playlist.name}
                />

                <CardContent sx={{ padding: '8px' }}>
                    <Typography gutterBottom variant="h6" component="div"
                        sx={{ 
                            fontSize: '16px', color: '#E6E6E6', fontWeight: 'bold',
                            WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box'
                        }}
                    >
                        {playlist.name}
                    </Typography>
                    <Typography variant="body2"
                        sx={{ 
                            fontSize: '12px', color: '#E6E6E6',
                            WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box'
                        }}
                    >
                        {playlist.description.substring(0, 7) !== '<a href' ? playlist.description : ''}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
