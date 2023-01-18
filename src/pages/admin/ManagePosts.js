import PostsTable from "./components/tables/PostsTable";

import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

function ManagePosts() {
    return (
        <>
            <Container>
                <Box my={2} sx={{ display: "flex", flexDirection: "column" }}>
                    <PostsTable />
                </Box>
            </Container>
        </>
    )
};
export default ManagePosts;