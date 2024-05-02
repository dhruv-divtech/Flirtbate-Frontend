import GuestGuard from 'utils/route-guard/GuestGuard';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <GuestGuard>{children}</GuestGuard>;
}
