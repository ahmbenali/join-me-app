import {Button} from '@heroui/button'
import {GiSelfLove} from 'react-icons/gi'

function Home() {
  return (
    <Button
      color="success"
      variant="bordered"
      className="m-5"
      startContent={<GiSelfLove size={20} />}
    >
      Submit
    </Button>
  )
}

export default Home
