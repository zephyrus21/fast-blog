import Head from 'next/head';
import { Box, Button, Flex, Icon, Text } from '@chakra-ui/core';
import { useAuth } from '../lib/auth';
import EmptyState from '../components/SiteEmptyState';

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Fast Blog</title>
      </Head>
      <Flex direction='column' align='center' justify='center' h='100vh'>
        <Icon color='black' name='logo' size='48px' mb={2} />
        <Text>{auth.user?.email}</Text>
        {auth.user ? (
          <EmptyState />
        ) : (
          <Button size='sm' onClick={(e) => auth.signinWithGitHub()}>
            Sign In
          </Button>
        )}
      </Flex>
    </>
  );
}
