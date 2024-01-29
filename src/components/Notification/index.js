// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = ({children}) => (
  <>
    <h1 className="heading">{children}</h1>

    <GrFormClose className="icon-close" />
  </>
)
export default Notification
