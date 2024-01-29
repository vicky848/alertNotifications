import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <>
    <h1 className="main-heading">Alert Notifications</h1>

    <div className="main-container">
      <div className="container heading-success">
        <Notification>
          <AiFillCheckCircle className="logo" />
          Success
        </Notification>
      </div>

      <p className="paragraph">You can access all the files in the folder</p>
    </div>

    <div className="main-container">
      <div className="container heading-error">
        <Notification>
          <RiErrorWarningFill className="logo" />
          Error
        </Notification>
      </div>

      <p className="paragraph">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </div>

    <div className="main-container">
      <div className="container heading-warning">
        <Notification>
          <MdWarning className="logo" />
          Warning
        </Notification>
      </div>

      <p className="paragraph">
        Viewers of this file can see comments and suggestions
      </p>
    </div>

    <div className="main-container">
      <div className="container heading-info">
        <Notification>
          <MdInfo className="logo" />
          Info
        </Notification>
      </div>

      <p className="paragraph">Anyone on the internet can view these files</p>
    </div>
  </>
)

export default AlertNotifications
