'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children, allowedRole }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user) {
      router.replace('/');
      return;
    }
    if (allowedRole && user.role !== allowedRole) {
      router.replace('/');
      return;
    }
    setAuthorized(true);
  }, [router, allowedRole]);

  if (!authorized) return null;
  return children;
};

export default ProtectedRoute;
