import Head from 'next/head';
import { Box, Button, Flex, Icon, Text } from '@chakra-ui/core';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Fast Blog</title>
      </Head>
      <Flex direction='column' align='center' justify='center' h='100vh'>
        <Icon name='logo' size='32px' />
        <Text>{auth.user?.email}</Text>
        {auth.user ? (
          <Button size='sm' onClick={(e) => auth.signout()}>
            Sign Out
          </Button>
        ) : (
          <Button size='sm' onClick={(e) => auth.signinWithGitHub()}>
            Sign In
          </Button>
        )}
      </Flex>
    </>
  );
}
