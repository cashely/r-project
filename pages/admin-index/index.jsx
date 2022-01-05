import React from 'react';
import { observer, inject, useLocalStore } from 'mobx-react';

export default observer((props) => {
  console.log(useLocalStore((s) => console.log(s)))
  return (
    <div>admin- {}</div>
  )
})