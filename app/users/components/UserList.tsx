'use client';

import { Box, Stack, Text } from "@chakra-ui/react";
import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UserListProps {
    users: User[]
}

const UserList: React.FC<UserListProps> = ({
    users
}) => {

    return (
        <Box
            h='full'
            w='360px'
            display='flex'
            flexDirection='column'
            p={3}
        >
            <Stack spacing={2}>
                <Stack>
                    <Text as='b' fontSize='2xl'>People</Text>
                </Stack>
                <Stack spacing={2}>
                    {users.map((el) => (
                        <UserBox key={el.id} user={el} />
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
}

export default UserList;