// This is the feedcard page
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThumbUp } from '@mui/icons-material';

function FeedCard({post}) {

    return (
        <Grid item xs={6}>
            <Paper elevation={3}>
                <Box padding={2}>
                    <Typography variant="h5" component="h5" marginLeft={1}>
                        <Link to="../post_article" style={{textDecoration: 'none', color:"#538DD7"}}>
                            {post.title}
                        </Link>
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
                    <Typography variant="body2" component="p" marginLeft={1.5}> <ThumbUp sx={{width:18, color:"#F75959"}} /> {post.likes}</Typography>
                    <Typography variant="body2" component="p" marginRight={2.5} sx={{fontWeight:600}}>{post.genre}</Typography>
                </Box>
            </Paper>
        </Grid>
    );
}
export default FeedCard;