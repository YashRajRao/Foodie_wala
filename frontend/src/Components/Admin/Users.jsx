import React from 'react'
const Users = () => {

    const arr = [1,2,3,4]
  return (
  <>
     <section className='tableClass'>
     
     <main>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Role</th>
            <th>Since</th>
          </tr>
        </thead>
         <tbody>
          {
            arr.map(i =>(
              <tr key={i}>
            <td>#gbgmb</td>
            <td>yash</td>
            <td>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU' alt=''  height={200} width={200}/>
            </td>
            <td>admin</td>
            <td>{"14-6-2023"}</td>
          </tr>
            ))
          }
         </tbody>
      </table>
     </main>
    </section>
  </>
  )
}

export default Users
