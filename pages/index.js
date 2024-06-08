import dynamic from 'next/dynamic';
import { server } from '../config'


const HomeM = dynamic(() => import("./Home"), {
  loading: () => <p>Loading ...</p>,
});

 function Home() {
  return (
    <div>
      <HomeM/>
     </div>
  )
}

export default Home