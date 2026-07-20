import type { Metadata } from 'next';
import EncryptionClient from './EncryptionClient';
import './encryption-explained.css';

export const metadata: Metadata = { title: 'SolidPass — Inside the Encryption' };

export default function Page() {
  return <EncryptionClient />;
}
