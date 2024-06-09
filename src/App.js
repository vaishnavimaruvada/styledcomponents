import {Heading, Button} from './styledComponents'

import './App.css'

const App = () => (
  <div>
    <Heading>Hello World</Heading>
    <Button type="button" outline={true}>
      Click
    </Button>
    <Button type="button" outline={false}>
      Click
    </Button>
  </div>
)
export default App
