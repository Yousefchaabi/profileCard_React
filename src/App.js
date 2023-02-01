import "./App.css";
import Profile from "./Components/Profile/Profile";

function App() {
  const data = [
    {
      fullName: "Youssef Chaàbi",
      bio: "I am a fullstack devloper with 2 years of experience in a big company.",
      profession: "FullStack Devloper at NAXXUM company.",
      imgSrc:
        "https://github.com/Yousefchaabi/Card_Challenge/blob/main/avatar.png?raw=true",
      facebook: "Youssef Chaabi",
      twitter: "Chaabi_Youssef",
      linkedIn: "Youssef Chaabi",
    },
  ];

  const sayHi = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div className="App">
      <Profile info={data} sayHi={sayHi} />
    </div>
  );
}

export default App;
