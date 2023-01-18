// This is the feedcard page
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { color } from '@mui/system';

function FeedCard({post}) {

    return (
        <Grid item xs={6}>
            <Paper elevation={3}>
                <Box padding={2}>
                    <Typography variant="h5" component="h5" marginLeft={1}>
                        {post.title}
                    </Typography>
                </Box>
                <Box paddingLeft={2} paddingBottom={1}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body2" component="p" marginLeft={1.5}>{post.first_name} {post.last_name}</Typography>
                    <Typography variant="body2" component="p" marginRight={2.5}>{post.datetime}</Typography>
                </Box>
                <Box paddingLeft={2} paddingBottom={2}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body2" component="p" marginLeft={1.5}>{post.likes}</Typography>
                    <Typography variant="body2" component="p" marginRight={2.5}>{post.genre}</Typography>
                </Box>
            </Paper>
        </Grid>
    );
}
export default FeedCard;