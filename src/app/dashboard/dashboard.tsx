import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { SignOutButton, useUser } from '@clerk/nextjs';
import NavBar from '../../components/navbar/navbar';
import withAuth from '../../../lib/withAuth';
import styles from './dashboard.module.css';
import '../app/globals.css';
import Image from 'next/image';

interface DataItem {
  _id: string;
  name: string;
  email: string;
  pandadoc_id: string;
  status: string;
}

const Dashboard = () => {
  const { user } = useUser();
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);


  const fetchData = useCallback(async () => {
    if (!user) return;
    try {
      const response = await fetch('/api/checkUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      setData(result.data || []); // Ensure result.data is defined
      setUserId(result.userId);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }, [user]);

  const createTemplate = useCallback(async () => {
    //if (!userId) return;
    try {
      const response = await fetch('/api/createTemplate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          templateName: 'XRPL Ambassador Program',
          imageName: 'ambaxrpl.png',
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
    } catch (error: any) {
      setError(error.message);
    }
  }, [userId]);

  useEffect(() => {
    if (user) {
      fetchData().then(() => {
        createTemplate();
      });
    }
  }, [user, fetchData, createTemplate, userId]);

  const router = useRouter();

  const handleTemplate = (templateName: string) => {
    router.push(`/templates/${templateName}`);
  };

  return (
    <div className={styles.dashboard}>
      <NavBar />
      <div className={styles.content}>
        <h2>Welcome {user?.firstName} !</h2>
        <h2>Choose a Smart Document Template :</h2>
        <div className={styles.templates}>
          <button className={styles.templateCard} onClick={() => handleTemplate('new')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.templateIcon}
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <p>Create a new Smart Document</p>
          </button>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            data.map((item) => (
              <button key={item._id} className={styles.templateCard} onClick={() => handleTemplate(item.name)}>
                <Image src="/contract.png" alt="Document Template" className={styles.templateImage} width={500} height={500} />
                <div className={styles.templateContent}>
                  <p>{item.name}</p>
                  <p>{item.status}</p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
