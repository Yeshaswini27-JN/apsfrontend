import axios from "axios";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");

  async function handleClick() {

      const response = await axios.post("http://localhost:3000/login", { username });
      console.log(response.data);
  
  }

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

// import axios from "axios"
// import { useState } from "react";

// export default function App() {
//   const [username,setUsername] = useState("")

//   async function handleSubmit(e) {
//     e.preventDefault()
//     const response = await axios.post("http://localhost:3000/login",(`${username}`))
//     setUsername(response.data)
//     console.log(response.data)
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <label>Username</label>
//       <input type="text" onChange={(e)=>{setUsername(e.target.value)}} />
//       <input type="submit" value="submit"/>
//     </form>
//     </>
//   )
// }