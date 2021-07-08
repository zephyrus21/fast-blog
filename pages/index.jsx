import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <div>{auth.user?.email}</div>
      {auth.user ? (
        <button onClick={(e) => auth.signout()}>Sign Out</button>
      ) : (
        <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
      )}
    </div>
  );
}
