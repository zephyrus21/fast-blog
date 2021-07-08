import { Button, Heading, Text } from '@chakra-ui/core';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Text>{auth.user?.email}</Text>
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
      )}
    </div>
  );
}
