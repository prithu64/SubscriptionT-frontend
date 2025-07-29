import axios from 'axios';
import DisplaySubs from '../components/DisplaySubs'
import SubsCard from '../components/SubsCard'
import SubsInfo from '../components/SubsInfo'
import UserNav from '../components/UserNav'
import { useEffect, useState } from 'react';


function DashBoard() {

    const [subscriptions, setSubscriptions] = useState([]);

  const getSubs = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3000/api/v1/subs/getSubs", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setSubscriptions(response.data.data);
  };

  useEffect(() => {
    getSubs();
  }, []);
 


  return (
    <div className='dark:bg-black/90  min-h-screen px-3'>
      <UserNav/>
      <SubsInfo subscriptions={subscriptions}/>
      <SubsCard refatch = {getSubs}/>
      <DisplaySubs subscriptions = {subscriptions} refetch={getSubs} />
    </div>
  )
}

export default DashBoard