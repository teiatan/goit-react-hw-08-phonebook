import { useSelector, useDispatch } from "react-redux";

export const App = () => {
  const Value = useSelector(state => state.myValue);
  console.log(Value)

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
