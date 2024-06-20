import React from 'react'

// localhost:3000/makeup/:id
// localhost:3000/makeup/1
// localhost:3000/makeup/2
// 다이나믹 라우트(아이디): [id] 폴더 만들기
const Makeup = () => {
  return (
    <div>
        <a href="/makeup/1">makeup/1</a>
        <a href="/makeup/2">makeup/2</a>
        <a href="/makeup/3">makeup/3</a>
    </div>
  )
}

export default Makeup