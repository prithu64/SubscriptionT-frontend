import SubsCard from '../components/SubsCard'
import SubsInfo from '../components/SubsInfo'
import UserNav from '../components/UserNav'

function DashBoard() {
  return (
    <div className='dark:bg-black/90 bg-gray-400/25 min-h-screen px-3'>
      <UserNav/>
      <SubsInfo/>
      <SubsCard/>
    </div>
  )
}

export default DashBoard