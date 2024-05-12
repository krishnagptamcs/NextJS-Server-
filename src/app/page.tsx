import axios from "axios";
async function getUserDetails() {
  // await new Promise((r) => setTimeout(r, 5000));
  // const response = await axios.get(
  //   "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  // );
  // return response.data;
  const response = await axios.get("http://localhost:3000/api/users");
  return response.data;
}

// create an async component
// asyn component can only run in server side, that means it should be server component
// in async component , you can fetch your data from api , on next js server and pre-render on int , before displaying to client side
export default async function Home() {
  // fetching the data from api backend
  const userData = await getUserDetails();
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
          <div className="border p-8 rounded">
            <div>Name: {userData?.name}</div>

            {userData?.email}
          </div>
        </div>
      </div>
    </>
  );
}
