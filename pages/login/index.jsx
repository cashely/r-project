import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
import { Input } from 'antd';

export default () => {
  const [name, setName] = useState(12)
  return (
    <div>
      login
      <Link to="/admin">admin</Link>
      <Input
        v-bind="name"
      />
      {name}
    </div>
  )
}