import React from 'react'
import { Timesheet } from '../features/timesheet/Timesheet'
import {Link} from "react-router-dom";

export default function TimeFieldPage() {
  return (
    <div>
      <Timesheet></Timesheet>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}
