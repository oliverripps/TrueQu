import Home from './Home.js';

function Create() {
  const createString = (digits) => {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < digits; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join('');
  };

  const partyString = createString(4);
  return (
    <div className="App">
      {' '}
      <Home />
      Party code: {partyString}
    </div>
  );
}

export default Create;
