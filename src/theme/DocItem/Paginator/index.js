import React from 'react';
import Paginator from '@theme-original/DocItem/Paginator';
import Giscus from '@site/src/components/app/GiscusComponent';

export default function PaginatorWrapper(props) {
  return (
    <>
      <Paginator {...props} />
      <Giscus/>
    </>
  );
}
