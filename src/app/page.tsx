'use client';

import CodeMirror from '@uiw/react-codemirror';

export default function Home() {
  return (
    <div className='h-full w-full flex justify-center pt-8'>
      <CodeMirror theme='dark' width='1200px' height='500px' className='rounded-sm' />
    </div>
  )
}