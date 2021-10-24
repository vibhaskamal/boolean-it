import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import boolean_it_video from './boolean_it_video.mp4';

export function Instructions() {
    return (
        <Container style={{ 'marginTop': '40px' }}>
            <Typography variant="h5">Instructions:</Typography> <br />
            <ul style={{ 'marginTop': '-10px' }}>
                <li>
                    Enter an expression in english (such as: a and b or c)
                </li>
                <li>
                    There should be a space between the operators ('and', 'or', 'not') and other letters/words
                </li>
                <li>
                    Click on the 'Clear' button to clear both the text fields
                </li>
                <li>
                    NOTE: The 'Converted text' field is read-only
                </li>
            </ul>
            <div style={{ marginTop: '60px' }}>
                <video
                    src={boolean_it_video}
                    muted
                    autoPlay
                    playsInline
                    loop
                    preload="auto"
                    width="600"
                    height="300"
                    controls="controls"
                    style={{ 'width': '-webkit-fill-available', 'border': 'solid' }} />
            </div>
        </Container>
    );
};