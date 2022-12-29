import { FC } from 'react';

//* Context
import { TaskProvider } from '../context/TaskProvider';

//* Components
import { FormData, TaskList } from '../components/UI';

const Home: FC = () => {
  return (
    <TaskProvider>
      <TaskList />
      <FormData action="add" />
    </TaskProvider>
  );
};

export default Home;
