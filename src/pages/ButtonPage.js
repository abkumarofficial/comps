import Button from '../components/Button';
import { GoBell } from 'react-icons/go';

function ButtonPage() {

  const handleClick = () => {
    console.log('Handle Click');
  }

  const handleMouseEnter = () => {
    console.log('asdfasdf');
  }

  return <div>
    <div>
      <Button primary rounded onClick={handleClick} className='mb-5'>
        <GoBell/>
        Click me!!</Button>
      </div>
    <div>
      <Button warning outline onMouseEnter={handleMouseEnter}>Buy Now</Button>
      </div>
    <div>
      <Button secondary>See Deal!</Button>
      </div>
    <div>
      <Button danger>Hide Adds</Button>
      </div>
    <div>
      <Button success>Something</Button>
      </div>
  </div>
}

export default ButtonPage;