import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: 'Juan',
  email: 'juan@gmail.com',
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hello: 'world', user: user }}>
      { children }
    </UserContext.Provider>
  )
}
