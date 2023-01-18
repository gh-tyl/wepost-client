import UserTable from "./components/tables/UserTable";

import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

function ManageUsers() {
    return (
        <>
            <Container>
                <Box my={2} sx={{ display: "flex", flexDirection: "column" }}>
                    <UserTable />
                </Box>
            </Container>
        </>
    )
};
export default ManageUsers;