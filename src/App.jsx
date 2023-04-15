import { useState } from "react";

function App() {
  const [isMember, setIsMember] = useState(false);
  const handleSwitch = () => {
    setIsMember(!isMember);
  };
  const handleForm = (e) => {
    e.preventDefault();
    // invoke formData constructor
    const formData = new FormData(e.currentTarget);
    // create object from the values
    const data = Object.fromEntries(formData);
    // formData is a array of arrays
    console.log([...formData]);
    // print all of the entries
    console.log([...formData.entries()]);
    // print only values
    console.log([...formData.values()]);
    console.log(data);
    // get all values
    const values = [...formData.values()];
    console.log(values);
    // reset the form
    e.currentTarget.reset();
  };
  return (
    <main className="App">
      <div className="form__wrapper">
        <h1>{isMember ? "Login" : "Register"}</h1>
        <form onSubmit={handleForm}>
          {isMember && (
            <div className="form__row">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
          )}

          <div className="form__row">
            <label htmlFor="name">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form__row">
            <label htmlFor="password">password</label>
            <input type="text" id="password" name="password" />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <p className="info">
          Not a member yet?
          <button onClick={handleSwitch} className=" btn-info">
            register
          </button>
        </p>
      </div>
    </main>
  );
}

export default App;
