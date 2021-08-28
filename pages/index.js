import Head from 'next/head';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Form from '../components/Form';
import TaskList from '../components/TaskList';
import Loader from '../components/Loader';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>To-do List App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card>
        <Form />
        <Loader />
        <TaskList />
      </Card>
    </div>
  );
}
