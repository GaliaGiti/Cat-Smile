import {useState} from 'react'

const UserFetch = () => {
    const [userInput, setUserInput] = useState("");
    const [response, setResponse] = useState(null);
    const data = {
      wizards: [
        {
          name: "Harry",
          interests: ["DADA", "Quiditch"],
        },
        {
          name: "Hermione",
          interests: ["Trans", "Everything"],
        },
        {
          name: "Ron",
          interests: ["ww", "Chess"],
        },
      ],
    };
  
    const getWizards = () => {
      const output = data.wizards.map((element, index) => {
        return (
          <div>
            <h2>{element.name} </h2>
            <p>
              {element.interests.map((interest) => {
                return <p className="interest">{interest}</p>;
              })}
            </p>
          </div>
        );
      });
  
      /* async function DataFetch(){
        try{
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
          return response.json()
  
        }
  
      catch(err){
        console.error(err)
      }
  
      
      }
  
      DataFetch()*/
  
      return output;
    };
    const apiKey = "46961cb7926c4ba4a7f50833250902";
    const city = "Paris";
  
    // fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    //   .then((response)=>{
    //     console.log(response)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //
    //   })
  
    const handleClick = (e) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          console.log(userInput);
          const found = data.filter((user, index) => {
            return user.name === userInput;
          });
          console.log(found)
          setResponse(found[0].email)
        });
    };
  
    const handleInputChange = (e) => {
      setUserInput(e.target.value);
    };
  
    return (
      <>
        <h1>This homepage</h1>
        {/* {getWizards()} */}
  
  
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleClick}>Get Info</button>
        <p>{response}</p>
  
      </>
    );
}

export default UserFetch